var express = require('express');
var router = express.Router();

// Require our controllers.
var post_controller = require('../controllers/postController');

// GET request for fetching Posts.
router.get('/posts', post_controller.fetch_posts_get);

// GET request for fetching Post details.
router.get('/post/:id', post_controller.post_details_get);

// GET request for fetching Post details.
router.get('/post/:id/upvote', post_controller.upvote_post_get);

// POST request for creating Post.
router.post('/post/create', post_controller.post_create_post);

module.exports = router;
