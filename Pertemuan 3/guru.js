const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get guru");
});

router.post("/inputguru", (req, res) => {
    res.send("Halaman input guru");
});

router.put("/editguru", (req, res) => {
    res.send("Halaman edit guru");
});

router.get("/deleteguru", (req, res) => {
    res.send("Halaman delete guru");
});

module.exports = router;