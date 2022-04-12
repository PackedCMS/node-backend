const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      maxlength: 32,
   },
   email: {
      type: String,
      required: true,
      maxlength: 200,
   },
   perm: {
      type: String,
      required: true,
      default: "0"
   },
   admin: {
      type: Boolean,
      default: false
   },
   ban: {
      type: Boolean,
      default: false
   },
   password: {
      type: String,
      required: true,
      maxlength: 200,
   },
   avatar: {
      type: String,
      default: "https://cdn.discordapp.com/attachments/894953448053825597/895320491273887765/default-avatar.png"
   },
   banner: {
      type: String,
      default: "https://cdn.discordapp.com/attachments/894953448053825597/895320491273887765/default-avatar.png"
   },
   deleted: {
      type: Boolean,
      default: false
   },
   actions: {
      type: Array
   },
   extras: {
      type: Array
   },
   date: {
      type: Date,
      default: Date.now
   }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;