const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get kelas");
});

router.post("/inputkelas", (req, res) => {
    res.send("Halaman input kelas");
});

router.put("/editkelas", (req, res) => {
    res.send("Halaman edit kelas");
});

router.get("/deletekelas", (req, res) => {
    res.send("Halaman delete kelas");
});

module.exports = router;