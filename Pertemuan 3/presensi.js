const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get presensi");
});

router.post("/inputpresensi", (req, res) => {
    res.send("Halaman input presensi");
});

router.put("/editpresensi", (req, res) => {
    res.send("Halaman edit presensi");
});

router.get("/deletepresensi", (req, res) => {
    res.send("Halaman delete presensi");
});

module.exports = router;