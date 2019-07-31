const express = require('express');
const postController = require('../controllers/post');
const validator = require('../validator')
const router = express.Router();

router.get("/",postController.defaultRoute);
router.get("/users",postController.getUsers);
router.get(`/user`,postController.getUser);
router.post(`/post`,validator.createPostValidator,postController.createPost);

module.exports = router;