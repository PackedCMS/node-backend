const Post = require("./mongodb/models/Post")
const User = require("./mongodb/models/User")
const UserMedia = require("./mongodb/models/UserMedia")

var users = User
var usersmedia = UserMedia
var posts = Post


module.exports = {
   users,
   usersmedia,
   posts
}