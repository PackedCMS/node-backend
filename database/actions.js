const User = require("./mongodb/models/User")



module.exports = {
   dbNew: async ({ data, col }) => new Promise((resolve, reject) => {
      console.log(data)
   })
}