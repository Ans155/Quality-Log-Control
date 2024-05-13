const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
  level: String,
  log_string: String,
  timestamp: {
    type: Date,
    default: Date.now,
  },
  metadata: {
    source: String,
  }
});

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;
