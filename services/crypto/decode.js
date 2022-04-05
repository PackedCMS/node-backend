const bcrypt = require("bcryptjs/dist/bcrypt")



module.exports = {
   passwordDecode: async ({pw, reelpw}) => new Promise((resolve, reject) => {
      bcrypt.compare(reelpw, pw, (err, isMatch) => {
         if(err) throw err;

         if(isMatch) {
            resolve(true)
         } else {
            reject(false)
         }
      })
   })
}