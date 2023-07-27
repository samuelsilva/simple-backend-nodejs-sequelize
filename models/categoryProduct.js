const Sequelize = require('sequelize');
const database = require('../db');

// It's a N:M relation. So, we need a new table, to be more especific: an intermediate table

const CategoryProduct = database.define('categoryProduct',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
})

module.exports = CategoryProduct;