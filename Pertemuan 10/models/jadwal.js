const { DataTypes } = require('sequelize');
const sequelize = require('../configs/db');

const jadwal = sequelize.define('jadwal', {
    id_kelas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    id_mapel: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    id_guru: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    hari: {
        type: DataTypes.ENUM ('Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'),
        allowNull: false
    },
    jam: {
        type: DataTypes.TIME,
        allowNull: false
    },
}, {
    tableName: 'jadwal',
    timestamps: false
});

module.exports = jadwal;