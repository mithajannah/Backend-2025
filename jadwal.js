const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get jadwal");
});

router.post("/inputjadwal", (req, res) => {
    res.send("Halaman input jadwal");
});

router.put("/editjadwal", (req, res) => {
    res.send("Halaman edit jadwal");
});

router.get("/deletejadwal", (req, res) => {
    res.send("Halaman delete jadwal");
});

module.exports = router;