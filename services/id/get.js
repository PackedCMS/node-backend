const leftPad = require("left-pad")



module.exports = {
   getId: () => {
      return leftPad((new Date()).getTime() * Math.random() * 100000, 18, 1)
   }
}