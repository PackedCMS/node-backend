const jwt = require("jsonwebtoken")
const jwt_settings = require("../../settings/jwt")



module.exports = {
   tokenDecode: async (payload) => new Promise((resolve) => {
      jwt.verify(payload, jwt_settings.secret, (err, data) => {
         if (err) {
            resolve(err)
         } else {
            resolve(data)
         }
      })
   })
}