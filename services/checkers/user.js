const { dbFindOne } = require("../../database/actions")
const { users } = require("../../database/models")

module.exports = {
   userPostCheck: async ({ name, email, password }) => {
      if (name) {
         if (name.length < 3) {
            return {
               message: "Kullanıcı adı en az 3 karakter olabilir!",
               error: true
            }
         }

         if (name.length > 32) {
            return {
               message: "Kullanıcı adı en fazla 32 karakter olabilir!",
               error: true
            }
         }
      }

      if (email) {
         if (email.length < 3) {
            return {
               message: "E-Posta en az 3 karatker olabilir!",
               error: true
            }
         }

         if (email.length > 256) {
            return {
               message: "E-Posta en fazla 256 karakter olabilir!",
               error: true
            }
         }
      }

      if (password) {

         if (password.length < 3) {
            return {
               message: "Şifre ne az 3 karakter olabilir!",
               error: true
            }
         }

         if (password.length > 128) {
            return {
               message: "Şifre en fazla 128 karakter olabilir",
               error: true
            }
         }
      }
   },
   userIsThere: async ({ name, email }) => new Promise((resolve) => {
      try {
         dbFindOne({ data: { "$or": [{ name: name }, { email: email }] }, col: users }).then(user => {
            if (user) {
               resolve(true)
            } else {
               resolve(false)
            }
         })
      } catch (error) {
         resolve(false)
         console.log(error)
      }
   })
}