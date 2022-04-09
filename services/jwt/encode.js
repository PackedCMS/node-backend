const jwt = require("jsonwebtoken")
const jwt_settings = require("../../settings/jwt")



module.exports = {
   tokenEncode: async (payload) => new Promise((resolve) => {
      jwt.sign(payload, jwt_settings.secret, { expiresIn: jwt_settings.expiresIn }, (err, token) => {
         if (err) {
            resolve(err)
         } else {
            resolve(token)
         }
      })
   })
}