const bcrypt = require("bcryptjs/dist/bcrypt")



module.exports = {
   passwordDecode: async ({ pw, reelpw }) => new Promise((resolve) => {
      bcrypt.compare(pw, reelpw, (err, isMatch) => {
         if (err) return console.log(err)

         if (isMatch) {
            resolve(true)
         } else {
            resolve(false)
         }
      })
   })
}