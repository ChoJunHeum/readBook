// const path = require("path");

const express = require("express");

const textController = require("../controllers/text");

const router = express.Router();

router.post("/getText", textController.getText)

module.exports = router;