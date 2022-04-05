const jwt = require("jsonwebtoken")
const jwt_settings = require("../../settings/jwt")



module.exports = {
   tokenEncode: async (payload) => new Promise((resolve, reject) => {
      jwt.sign(payload, jwt_settings.secret, {expiresIn: jwt_settings.expiresIn}, (err,token) => {
         if(err){
            reject(err)
         } else {
            resolve(token)
         }
      })
   }) 
}