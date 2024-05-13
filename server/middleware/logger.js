const { getLoggerConfig } = require('../utils/loggingConfig');

function logger(req, res, next) {
  const { level, log_string, source } = req.body;
  const timestamp = new Date().toISOString();
  const formattedLog = {
    timestamp,
    level,
    log_string,
    metadata: {
      source,
    }
  };
  req.body = formattedLog;
  next();
}

module.exports = logger;
