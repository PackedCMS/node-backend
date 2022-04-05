const { userIsThere } = require("../../checkers/user")




module.exports = {
   newUser: async ({ body }) => new Promise((resolve, reject) => {
      const { name, email, password } = req.body
      userIsThere({ name, email }).then(user => {
         if(user){
            resolve({
               error: true,
               message: "Bu kullanıcı zaten var!"
            })
         } else {
            
         }
      })
   })
}