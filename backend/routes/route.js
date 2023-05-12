const express = require("express");

const router = express.Router();

// All personal
router.get("/", (req, res) => {
    res.json({
        Msg: "GET all personal"
    });
})

//Single personal
router.get("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        Msg: `GET ${id} personal`
    });
})


router.post("/", (req, res) => {
    res.json({
        Msg: "Post a personal"
    });
})

router.patch("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        Msg: `Update ${id} personal`
    });
})

router.delete("/:id", (req, res) => {
    const { id } = req.params;
    res.json({
        Msg: `Delete ${id} personal`
    });
})

module.exports = router;