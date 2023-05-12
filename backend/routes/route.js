const express = require("express");
const { getPersonals, getPersonal, postPersonal, updatePersonal, deletePersonal } = require("../controllers/routeController");

const router = express.Router();

// All personals
router.get("/", getPersonals)

//Single personal
router.get("/:id", getPersonal)

// Post a new personal
router.post("/", postPersonal)

//Update a personal
router.patch("/:id", updatePersonal)

//Delete a personal
router.delete("/:id", deletePersonal)

module.exports = router;