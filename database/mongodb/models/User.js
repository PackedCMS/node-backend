const mongoose = require('mongoose');
const user_settings = require('../../../settings/user');

const UserSchema = new mongoose.Schema({
   id: {
      type: String,
      default: Date.now
   },
   name: {
      type: String,
      required: true,
      maxlength: user_settings.max_name_lenght,
   },
   email: {
      type: String,
      required: true,
      maxlength: user_settings.max_email_lenght,
   },
   perms: {
      type: Array,
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
      maxlength: user_settings.max_password_lenght,
   },
   media: {
      type: String,
   },
   followers: {
      type: Array
   },
   followings: {
      type: Array
   },
   saved: {
      type: Array,
      default: {
         "Kaydedilenler": []
      }
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