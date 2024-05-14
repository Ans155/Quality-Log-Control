const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { getLoggerConfig } = require('../utils/loggingConfig');
const Log = require('../models/logs');

router.post('/search', async (req, res) => {
  try {
    const { query, startDate, endDate } = req.body;
    let filter = {};


    if (query) {
      filter.$or = [
        { level: { $regex: query, $options: 'i' } },
        { log_string: { $regex: query, $options: 'i' } },
        { 'metadata.source': { $regex: query, $options: 'i' } },
      ];
    }

 
    if (startDate && endDate) {
      filter.timestamp = { $gte: new Date(startDate), $lte: new Date(endDate) };
    } else if (startDate) {
      filter.timestamp = { $gte: new Date(startDate) };
    } else if (endDate) {
      filter.timestamp = { $lte: new Date(endDate) };
    }

    const logs = await Log.find(filter).sort({ timestamp: -1 });
    res.json(logs);
  } catch (error) {
    console.error('Error searching logs:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.post('/log', async (req, res) => {
  try {
    const { level, log_string, metadata } = req.body;
    const log = new Log({
      level,
      log_string,
      metadata,
    });
    await log.save();


    const source = metadata.source || 'unknown_source';
    const logFilePath = path.join(__dirname, `../../logs/${source}.log`);
    const formattedLog = JSON.stringify(req.body) + '\n';
    await appendToFile(logFilePath, formattedLog);

    res.sendStatus(200);
  } catch (error) {
    console.error('Error logging:', error);
    res.status(500).send('Internal Server Error');
  }
});
router.get('/alllogs', async (req, res) => {
  try {
    const logs = await Log.find();
    res.json(logs);
  } catch (error) {
    console.error('Error fetching logs:', error);
    res.status(500).send('Internal Server Error');
  }
});
async function appendToFile(filePath, data) {
  return new Promise((resolve, reject) => {
    fs.appendFile(filePath, data, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve();
      }
    });
  });
}

module.exports = router;
