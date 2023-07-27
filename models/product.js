const Sequelize = require('sequelize'); 
const database = require('../db');
const Manufacturer = require('./manufacturer');
const Category = require('./category');
const CategoryProduct = require('./categoryProduct');

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
});

// 1-N
Manufacturer.hasMany(Product, {
    foreignKey: 'idManufacturer'
});

// N-M 
Product.belongsToMany(Category,{
    through: {
        model: CategoryProduct
    },
    foreignKey:'idProduct',
    constraint: true
});

Category.belongsToMany(Product,{
    through: {
        model: CategoryProduct
    },
    foreignKey:'idCategory',
    constraint: true
});

// We can use "SUPER MANY-To-MANY RELATIONSHIP"
/*
Product.hasMany(CategoryProduct, { foreignKey: 'idProduct' });
CategoryProduct.belongsTo(Product, { foreignKey: 'idProduct' });
Category.hasMany(CategoryProduct, { foreignKey: 'idCategory' });
CategoryProduct.belongsTo(Category, { foreignKey: 'idCategory' });
*/

module.exports = Product;