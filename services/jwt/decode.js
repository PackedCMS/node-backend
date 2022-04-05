const jwt = require("jsonwebtoken")
const jwt_settings = require("../../settings/jwt")



module.exports = {
   tokenDecode: async (payload) => new Promise((resolve, reject) => {
      jwt.verify(payload, jwt_settings.secret, (err, data) => {
         if (err) {
            reject(err)
         } else {
            resolve(data)
         }
      })
   })
}