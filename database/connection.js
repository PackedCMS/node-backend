const { db_settings } = require("../settings/database");
const database = require("./mongodb");

var db_connect = () => new Promise((resolve, reject) => {
   database.connect.then(() => resolve("MongoDB Bağlandı"))
      .catch(err => reject(err));
})

module.exports = db_connect