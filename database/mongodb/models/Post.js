const mongoose = require('mongoose');
const post_settings = require('../../../settings/post');

const PostSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      maxlength: 64,
   },
   main_image: {
      type: String,
      default: post_settings.default_image
   },
   images: {
      type: Array,
   },
   videos: {
      type: Array,
   },
   keywords: {
      type: String,
      maxlength: 5000,
   },
   content: {
      type: String,
      maxlength: 50000
   },
   draft: {
      type: Boolean,
      default: true
   }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;