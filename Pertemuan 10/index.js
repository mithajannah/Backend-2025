const express = require('express');
const sequelize = require('./configs/db');
const jadwalControllers = require('./controllers/jadwalControllers');


const app = express();
app.use(express.json());

app.use('/api/jadwal', jadwalControllers);

sequelize.sync().then(()=>console.log("Database.synced"));

app.listen(3000, ()=>console.log("Server running on http://localhost:3000"));