const { dbFindOne } = require("../../database/actions")
const { users } = require("../../database/models")
const { passwordDecode } = require("../crypto/decode")
const { tokenEncode } = require("../jwt/encode")



module.exports = {
   loginUser: async ({ body }) => new Promise((resolve) => {
      try {
         const { email, password } = body
         dbFindOne({ data: { email: email }, col: users }).then(response => {
            const user = response.data
            if (user) {
               passwordDecode({ pw: password, reelpw: user.password }).then(match => {
                  if (match) {
                     tokenEncode({
                        name: user.name,
                        email: user.email,
                        id: user.id
                     }).then(token => {
                        resolve({
                           error: false,
                           message: "Giriş Başarılı",
                           token: token,
                           user: {
                              id: user.id,
                              name: user.name,
                              email: user.email,
                              date: user.date
                           }
                        })
                     })
                  } else {
                     resolve({
                        message: "Şifre yanlış",
                        error: true
                     })
                  }
               })
            } else {
               resolve({
                  message: "Böyle bir e-posta kayıtlı değil",
                  error: true
               })
            }
         })
      } catch (error) {
         resolve({
            message: error,
            error: true
         })
         console.log(error)
      }
   })
}