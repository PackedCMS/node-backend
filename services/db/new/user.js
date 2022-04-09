const { dbNew } = require("../../../database/actions")
const { users } = require("../../../database/models")
const { userIsThere } = require("../../checkers/user")
const { passwordEncode } = require("../../crypto/encode")
const { tokenEncode } = require("../../jwt/encode")




module.exports = {
   newUser: async ({ body }) => new Promise((resolve) => {
      let { name, email, password } = body
      userIsThere({ name, email }).then(user => {
         if (user) {
            resolve({
               error: true,
               message: "Bu kullanıcı zaten var!"
            })
         } else {
            passwordEncode(password).then(newpw => {
               password = newpw;
               dbNew({ data: { name, email, password }, col: users }).then(response => {
                  if (response.error === false) {
                     const user = response.data
                     tokenEncode({
                        _id: user._id,
                        name: user.name,
                        email: user.email,
                        date: user.date
                     }).then(token => {
                        resolve({
                           error: false,
                           message: "Kullanıcı başarılı bir şekilde oluşturuldu!",
                           token: token,
                           user: {
                              _id: user._id,
                              name: user.name,
                              email: user.email,
                              date: user.date
                           }
                        })
                     })
                  }
               })
            })
         }
      })
   })
}