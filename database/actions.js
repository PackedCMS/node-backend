const db_settings = require("../settings/database")



module.exports = {
   dbNew: async ({ data, col }) => new Promise((resolve) => {
      if (db_settings.type === "mongodb") {
         try {
            const newData = new col(data)
            newData.save().then((data) => {
               resolve({
                  message: "Veri başarılı bir şekilde oluşturuldu!",
                  data: data,
                  error: false
               })
            })
         } catch (error) {
            resolve({
               message: "Hata oluştu",
               error: true
            })
         }
      }
   }),
   dbFindOne: async ({ data, col }) => new Promise((resolve) => {
      if (db_settings.type === "mongodb") {
         try {
            col.findOne(data).then(data => {
               if (!data) {
                  resolve({
                     message: "Veri Bulunamadı",
                     error: true
                  })
               } else {
                  resolve({
                     message: "Veri başarılı bir şekilde bulundu!",
                     data: data,
                     error: false
                  })
               }
            })
         } catch (error) {
            resolve({
               message: "Hata oluştu",
               error: true
            })
         }
      }
   }),
   dbFindMulti: async ({ data, col, sort, limit, skip }) => new Promise((resolve) => {
      if (db_settings.type === "mongodb") {
         try {
            col.find(data).sort(sort).skip(skip).limit(limit).then(data => {
               if (!data) {
                  resolve({
                     message: "Veri Bulunamadı",
                     error: true
                  })
               } else {
                  resolve({
                     message: "Veri başarılı bir şekilde bulundu!",
                     data: data,
                     error: false
                  })
               }
            })
         } catch (error) {
            resolve({
               message: "Hata oluştu",
               error: true
            })
         }
      }
   })
}