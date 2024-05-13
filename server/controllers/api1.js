const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const { getLoggerConfig } = require('../utils/loggingConfig');
const Log = require('../models/logs');
router.post('/log', async (req, res) => {
  try {
    const logData = req.body;
    const apiConfig = getLoggerConfig('api1');
    if (!apiConfig) {
      throw new Error('Logging configuration not found for API1');
    }
    const logFilePath = path.join(__dirname, '../../', apiConfig.filePath);
    const formattedLog = JSON.stringify(logData) + '\n';
    await appendToFile(logFilePath, formattedLog); 
    const { level, log_string, metadata } = req.body;
    const log = new Log({
      level,
      log_string,
      metadata,
    });
    await log.save();
    res.sendStatus(200);
  } catch (error) {
    console.error('Error logging:', error);
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
