const express = require('express');
const app = express();
 
const db = require('./models')

// when we start our server, at the same time we want to go over the tables that exist in the models directory
// if not -> create that table.

db.sequelize.sync().then(() => {
    app.listen(3001, () => {
    console.log("Server running on port 3001")
});
});




