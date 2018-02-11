const express = require('express');
const bodyParser = require('body-parser');

const {mongoose} = require('./db/mongoose');
const {Todo} = require('./models/todo');
const {User} = require('./models/user');

let app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    let todo = new Todo({
        text: req.body.text
    });

    todo.save()
    .then((doc) => {
        res.send(doc);
    })
    .catch((e) => {
        res.status(400).send(e);
    });
});

app.listen(3000, () => {
    console.log('Application running on port 3000');
});