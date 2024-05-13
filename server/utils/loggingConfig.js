const fs = require('fs');
const path = require('path');

function getLoggerConfig(apiName) {
  const configPath = path.join(__dirname, '../config/config.json');
  const configData = fs.readFileSync(configPath);
  const configJson = JSON.parse(configData);
  return configJson.apis[apiName];
}

module.exports = { getLoggerConfig };
