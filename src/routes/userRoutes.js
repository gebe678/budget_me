const express = require("express");
const router = express.Router();
const path = require("path");


const userController = require(path.resolve(process.cwd(), "src", "controllers", "user.controller"));


router.get('/', userController.rootPage);
router.get('/test', userController.secondPage);

module.exports = router;