const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Mahasiswa = sequelize.define('Mahasiswa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    nama: {
        type: DataTypes.STRING,
        allowNull: false
    },
    nim: {
        type: DataTypes.STRING,
        allowNull: false
    },
    jurusan: {
        type: DataTypes.STRING,
        allowNull: false
    } 
}, {
    tableName: 'mahasiswa',
    timestamps: false
}
);

module.exports = Mahasiswa;