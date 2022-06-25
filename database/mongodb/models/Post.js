const mongoose = require('mongoose');
const post_settings = require('../../../settings/post');

const PostSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
      maxlength: post_settings.max_name_lenght,
   },
   slug: {
      type: String,
      required: true,
      maxlength: post_settings.max_slug_lenght,
   },
   main_image: {
      type: String,
      default: post_settings.default_image
   },
   author: {
      type: String,  
      required: true
   },
   images: {
      type: Array,
   },
   videos: {
      type: Array,
   },
   audios: {
      type: Array,
   },
   reactions: {
      type: Array,
   },
   comments: {
      type: Array,
   },
   views: {
      type: Number,
      default: 0,
   },
   keywords: {
      type: String,
      maxlength: post_settings.max_keywords_lenght,
   },
   content: {
      type: String,
      maxlength: post_settings.max_content_lenght
   },
   draft: {
      type: Boolean,
      default: true,
   },
   changes: {
      type: Array,
   },
   last_edit: {
      type: Date,
      default: Date.now()
   },
   date: {
      type: Date,
      default: Date.now()
   },
   delete_date: {
      type: Date,
   }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;