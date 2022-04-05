




module.exports = {
   userPostCheck: async ({ name, email, password }) => {
      if (name) {
         if (name.length < 3) {
            return {
               message: "Kullanıcı adı en az 3 karakter olabilir!"
            }
         }

         if (name.length > 32) {
            return {
               message: "Kullanıcı adı en fazla 32 karakter olabilir!"
            }
         }
      }

      if (email) {
         if (email.length < 3) {
            return {
               message: "E-Posta en az 3 karatker olabilir!"
            }
         }

         if (email.length > 256) {
            return {
               message: "E-Posta en fazla 256 karakter olabilir!"
            }
         }
      }

      if (password) {

         if (password.length < 3) {
            return {
               message: "Şifre ne az 3 karakter olabilir!"
            }
         }

         if (password.length > 128) {
            return {
               message: "Şifre en fazla 128 karakter olabilir"
            }
         }
      }
   }
}