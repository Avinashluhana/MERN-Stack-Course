const express = require("express");

const controller = require("../controller/controller");

const router = express.Router();


router.post("/", controller.postTodo);
router.get("/", controller.getTodo);

module.exports = router;
