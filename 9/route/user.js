const express = require("express");

const controller = require("../controller/controller");

const router = express.Router();

router.post("/login", controller.login);
router.get("/signup", controller.signup);


module.exports = router;
