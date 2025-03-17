const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get mapel");
});

router.post("/inputmapel", (req, res) => {
    res.send("Halaman input mapel");
});

router.put("/editmapel", (req, res) => {
    res.send("Halaman edit users");
});

router.get("/deletemapel", (req, res) => {
    res.send("Halaman delete mapel");
});

module.exports = router;