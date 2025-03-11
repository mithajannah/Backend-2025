const express =require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("get rent");
});

router.get("/:id", (req, res) => {
    res.send(`rent id : ${req.params.id}`);
});

module.exports = router;