const mongoose = require('mongoose');
const user_settings = require('../../../settings/user');

const UserMediaSchema = new mongoose.Schema({
   id: {
      type: String,
      default: Date.now
   },
   author: {
      type: String,
      required: true,
   },
   avatar: {
      type: String,
      default: user_settings.default_avatar
   },
   banner: {
      type: String,
      default: user_settings.default_banner
   }
});

const UserMedia = mongoose.model('UserMedia', UserMediaSchema);

module.exports = UserMedia;