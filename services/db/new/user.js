const { dbNew } = require("../../../database/actions")
const { users } = require("../../../database/models")
const { userIsThere } = require("../../checkers/user")
const { passwordEncode } = require("../../crypto/encode")




module.exports = {
   newUser: async ({ body }) => new Promise((resolve, reject) => {
      let { name, email, password } = body
      userIsThere({ name, email }).then(user => {
         if(user){
            resolve({
               error: true,
               message: "Bu kullanıcı zaten var!"
            })
         } else {
            passwordEncode(password).then(newpw => {
               password = newpw;
               dbNew({ data: { name, email, passowrd }, col: users }).then(response => {
                  console.log(response)
               })
            })
         }
      })
   })
}