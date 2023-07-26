const Sequelize = require('sequelize'); 
const database = require('../db');
const Manufacturer = require('./manufacturer');

// Here we'll model the tables
const Product = database.define('product',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    name: {
        type: Sequelize.STRING, // Sequelize.STRING(150) to limit string to 150 characters
        allowNull: false
    },
    price: Sequelize.DECIMAL,
    description: Sequelize.STRING
});

/**
 * 1-1
 * 1-N
 * N-N
 * 
 */


// Create the relationship between 2 tables: product and manufacturer
// 1-1
Product.belongsTo(Manufacturer,{
    constraint: true,
    foreignKey: 'idManufacturer'
})

// 1-N
Manufacturer.hasMany(Product, {
    foreignKey: 'idManufacturer'
})

module.exports = Product;