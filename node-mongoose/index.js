const mongoose = require('mongoose');

const Dishes = require('./models/dishes');
const url = 'mongodb://localhost:27017/conFusion';
const connect = mongoose.connect(url);

connect.then(bd => {
    console.log('Connected Successfully');

    let newDish = new Dishes({
        name: " Test dish ",
        description: " Description about test dish"
    });

    newDish.save().then((dish) => {

        console.log("Inserted New Dish");
        console.log(dish);
        return Dishes.find({}).exec();
    }).then((dishes) => {
        console.log(dishes);
        return Dishes.remove({});
    }).then(() => {
        return mongoose.connection.close();
    }).catch(err => {
        console.log(err);
    });



});