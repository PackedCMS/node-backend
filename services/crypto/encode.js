const bcrypt = require('bcryptjs');

module.exports = {
   passwordEncode: async (payload) => new Promise((resolve, reject) => {
      bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(payload, salt, (err, hash) => {
            if(err){
               reject(err)
            } else {
               resolve(hash)
            }
         })
      })
   })
}