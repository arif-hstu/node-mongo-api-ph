const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('How are you');
});

app.listen(3001, 'localhost');
