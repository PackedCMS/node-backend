const { dbNew, dbFindOne } = require("../../../database/actions")
const { users, usersmedia } = require("../../../database/models")
const User = require("../../../database/mongodb/models/User")
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
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        date: user.date
                     }).then(token => {
                        dbNew({ data: { author: user.id }, col: usersmedia }).then(response => {
                           const media = response.data
                           dbFindOne({ data: { id: user.id }, col: users }).then(user => {
                              user.media = media.id,
                                 user.save().then(() => {
                                    resolve({
                                       error: false,
                                       message: "Kullanıcı başarılı bir şekilde oluşturuldu!",
                                       token: token,
                                       user: {
                                          id: user.id,
                                          name: user.name,
                                          email: user.email,
                                          date: user.date
                                       }
                                    })
                                 })
                           })
                        })
                     })
                  } else {
                     return resolve(response)
                  }
               })
            })
         }
      })
   })
}