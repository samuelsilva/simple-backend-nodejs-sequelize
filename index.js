(async () => {

    // I just need that database exist before this.
    // If that db don't have the table, the table will be create
    const database = require('./db');
    const Product = require('./models/product');
    const Manufacturer = require('./models/manufacturer');
    const Category = require('./models/category');

    await database.sync();
    
    const newCategory = await Category.create({ name: 'IT' });
    const product = await Product.findByPk(1);
    product.setCategories([newCategory]);

    // Since the database already exists, I will force the re-creation
    //await database.sync({force: true});
    
    /*
    const newManufacturer = await Manufacturer.create({
        name: 'Apple'
    });

    const newProduct = await Product.create({
        name: 'MacBook',
        price: 10000,
        description: 'Apple Notebook',
        idManufacturer: newManufacturer.id
    });
    console.log(newProduct);
    */

    //lazy loading
    /*
    const products = await Product.findByPk(1);
    const manufacturer = await products.getManufacturer();
    console.log(manufacturer.name);
    */
    //eager loading
    const products = await Product.findByPk(1, { include: Manufacturer});
    console.log(products.manufacturer.name);
    console.log(products.manufacturer);


    // Now, we can handle the table, add, adjust,etc...
    // Here we add a product
    /*
    const newProduct = await Product.create({
        name: 'Notebook Dell',
        price: 3000,
        description: 'Notebook Intel i5'
    });
    console.log(newProduct);
    

    // Here we can read the products
    //const products = await Product.findAll(); // using .findByPk(1) we can return the id 1 from table
    const products = await Product.findAll({
        where: {
            price: 5000
        }
    });
    const productsby = await Product.findByPk(3);

    console.log(productsby);
    //console.log(products);
    

    // Doing a product update
    
    const productUpdate = await Product.findByPk(6);
    console.log(productUpdate);

    productUpdate.description = productUpdate.description + ' - doing a update in this row';
    productUpdate.save();
    console.log(productUpdate);

    // delete data row
    await productUpdate.destroy();
    */

    // if I want to destroy without usind any type of find
    /*
    await Product.destroy({ where: {
        price: 15
    }});
    */


})();