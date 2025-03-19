const express = require("express");
const router = express.Router();
const allergenController = require("../controller/allergenControl");

router.get("/", allergenController.getAll);
router.get("/:id", allergenController.getSingle);

module.exports = router;
