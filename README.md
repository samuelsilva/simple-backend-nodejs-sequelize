# Simple Backend NodeJS from scratch using Sequelize
A project made for fun, just for training (more to remember) how to use the ORM Sequelize.

## Step by Step
Here the steps to build a backend NodeJS

### Create the project
``` npm init -y ```

### Install the dependencies (sequelize + database driver)
I decided to use mysql

``` npm i sequelize mysql2 ```

### Open your VSCode e create the file db.js
If you already know how to use ENV file to hide your connection data, it's better, but here we use KISS principle (Keep It Simple, Stupid). Example:
```
const Sequelize = require('sequelize'); //Upper because it's a class
// (1-database name, 2-user, 3-password, 4-params)
const sequelize = new Sequelize('nodeSequelize','samuel','123456',{
    dialect:'mysql',
    host:'localhost',
    port: 3306
}); 

module.exports = sequelize;
```


### Create the file(s) that represents your table
1. Database need to exist
2. If don't exist, will be create
3. The table can be populated

### Create the index.js and execute it
``` node index.js ```

### Next steps you see in the files
1. To organize: move product to models folder
2. Create the models/manufacturer.js
3. Create constraints in product.js 
4. If you need, force the database re-creation 
5. To N:M relations you need a intermediate table to make the relationships
