const express =require('express');
const router = express.Router();

//routing

router.get("/", (req, res) => {
    res.send("Halaman get users");
});

router.post("/inputusers", (req, res) => {
    res.send("Halaman input users");
});

router.put("/editusers", (req, res) => {
    res.send("Halaman edit users");
});

router.get("/deleteusers", (req, res) => {
    res.send("Halaman delete users");
});

module.exports = router;