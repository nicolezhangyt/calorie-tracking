const express = require('express');

const app = express(),
bodyParser = require('body-parser');
port = 3080;

const foodList = [];

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname), '../web/build')

app.get('/api/foodList', (req, res) => {
    console.log('api/foodList called');
    res.json(foodList);
});

app.post('api/food', (req, res) => {
    const food = req.body.food;
    console.log('Adding food:', food);
    foodList.push(food);
    res.json('food added');
})

app.get('/', (req, res) => {
    res.send('App Works!');
})

app.listen(port, () => {
    console.log(`Server listening to port: ${port}`);
})