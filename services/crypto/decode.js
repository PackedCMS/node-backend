const bcrypt = require("bcryptjs/dist/bcrypt")



module.exports = {
   passwordDecode: async ({pw, reelpw}) => new Promise((resolve) => {
      bcrypt.compare(reelpw, pw, (err, isMatch) => {
         if(err) throw err;

         if(isMatch) {
            resolve(true)
         } else {
            resolve(false)
         }
      })
   })
}