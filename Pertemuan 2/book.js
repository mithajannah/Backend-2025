const express =require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.send("get book");
});

router.get("/:id", (req, res) => {
    res.send(`book id : ${req.params.id}`);
});

module.exports = router;