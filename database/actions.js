const db_settings = require("../settings/database")



module.exports = {
   dbNew: async ({ data, col }) => new Promise((resolve, reject) => {
      if (db_settings.type === "mongodb") {
         const newData = new col(data)
         newData.save().then((user) => {
            resolve({
               message: "Veri başarılı bir şekilde oluşturuldu!",
               data: user,
               error: false
            })
         })
      }
   })
}