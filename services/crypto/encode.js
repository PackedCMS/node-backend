const bcrypt = require('bcryptjs');

module.exports = {
   passwordEncode: async (payload) => new Promise((resolve) => {
      bcrypt.genSalt(10, (err, salt) => {
         bcrypt.hash(payload, salt, (err, hash) => {
            if(err){
               resolve(err)
            } else {
               resolve(hash)
            }
         })
      })
   })
}