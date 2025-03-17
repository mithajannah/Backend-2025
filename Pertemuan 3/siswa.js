const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get siswa");
});

router.post("/inputsiswa", (req, res) => {
    res.send("Halaman input siswa");
});

router.put("/editsiswa", (req, res) => {
    res.send("Halaman edit siswa");
});

router.get("/deletesiswa", (req, res) => {
    res.send("Halaman delete siswa");
});

module.exports = router;