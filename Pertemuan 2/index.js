const express = require ('express');
const app = express();
const port = 3000;
const user = require('./user')
const book = require('./book')
const rent = require('./rent')

app.use('/user', user);
app.use('/book', book);
app.use('/rent', rent);

app.get("/", (req, res) =>{
    res.send("Kirim data");
});

app.post("/", (req, res) =>{
    res.send("Kirim data");
});

app.put("/", (req, res) =>{
    res.send("edit data");
});

app.patch("/", (req, res) =>{
    res.send("edit data");
});

app.delete("/", (req, res) =>{
    res.send("hapus data");
});

app.listen(port,()=>{
    console.log(`Aplikasi berjalan pada : $(port)`);
})