const express = require("express");

const controller = require("../controller/controller");

const router = express.Router();

router.get("/", controller.getTodo);
router.post("/", controller.postTodo);
router.put("/", controller.putTodo);
router.patch("/", controller.patchTodo);
router.delete("/", controller.deleteTodo);
module.exports = router;
