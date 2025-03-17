const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get nilai");
});

router.post("/inputnilai", (req, res) => {
    res.send("Halaman input nilai");
});

router.put("/editnilai", (req, res) => {
    res.send("Halaman edit nilai");
});

router.get("/deletenilai", (req, res) => {
    res.send("Halaman delete nilai");
});

module.exports = router;