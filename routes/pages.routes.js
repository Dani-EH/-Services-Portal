const express = require("express");
const router = express.Router();

const pages = require("../controllers/pages.controller");

router.get("/", pages.renderLogin);
router.get("/register", pages.renderRegister);

module.exports = router;
