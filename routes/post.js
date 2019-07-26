const express = require('express');
const postController = require('../controllers/post');

const router = express.Router();

router.get("/",postController.defaultRoute);
router.get("/users",postController.getUsers);
router.get(`/user`,postController.getUser);

module.exports = router;