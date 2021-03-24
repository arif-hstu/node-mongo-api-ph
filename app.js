const express = require('express');

const app = express();
app.listen(3001, 'localhost');


const users = ['arif', 'garif', 'darif', 'marif'];

// Create express server
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    // authorized headers for preflight requests
    // https://developer.mozilla.org/en-US/docs/Glossary/preflight_request
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
    app.options('*', (req, res) => {
        // allowed XHR methods
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
});


app.get('/', (req, res) => {
    res.send('How are you? I\'m fine');
});

let name;
const changeCaseName = (sentCase, name) => {
    if(sentCase ==='upper'){
        name = name.toUpperCase();
    }
    return name;
}
app.get('/user/:id', (req, res) => {
    const userId = req.params.id;
    name = users[userId];
    changeCaseName(req.query.caseName, name);

    res.send({ userId, name })
})
