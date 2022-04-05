const db_settings = require("../../settings/database")
const mongoose = require('mongoose');

var database = {}

database.connect = mongoose
   .connect(
      db_settings.url,
      { useNewUrlParser: true, useUnifiedTopology: true }
   )

module.exports = database