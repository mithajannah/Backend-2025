const fs = require('fs');
const path = require('path');
const dataPath = path.join(__dirname, 'data.json');

// Fungsi untuk membaca data dari JSON
const readData = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

//Fungsi untuk menulis data ke JSON
const writeData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2))
};

//GET: Ambil semua user
exports.getAllBarangs = (req, res) => {
    const barangs = readData();
    res.json(barangs);
};

// GET: Ambil user berdasarkan ID
exports.getBarangById = (req, res) => {
    const barangs = readData();
    const barang = barangs.find(u => u.id == req.params.id);
    if (!barang) return res.status(404).json({massage: 'User Not Found'});
};

//POST: Tambah user baru
exports.createBarang = (req, res) => {
    const barangs = readData();
    const newBarang = { id: barangs.length + 1, ...req.body };
    barangs.push(newBarang);
    writeData(barangs);
    res.status(201).json({ massage: 'User created successfully', newBarang})
};

//PUT: Update data user
exports.updateBarang = (req, res) => {
    let barangs = readData();
    const index = barangs.findIndex(u => u.id == req.params.id);
    if (index === -1) return res.status(404).json({ massage: 'User not found'});

    barangs[index] = { ...barangs[index], ...req.body };
    writeData(barangs);
    res.json({ massage: 'User updated successfully', barang: barangs[index] });
};

//DELETE: Hapus user berdasarkan ID
exports.deleteBarang = (req, res) => {
    let barangs = readData();
    const newBarangs = barangs.filter(u => u.id != req.params.id);
    if (barangs.length === newBarangs.length) return res.status(404).json({ massage: 'User not found' })

    writeData(newBarangs);
    res.json({ massage: 'User deleted successfully'});
};
