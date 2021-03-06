const express = require('express');
const app = express();
const server = require("http").Server(app);
const io = require('socket.io')(server);
const stream = require('./ws/stream');
const path = require('path');

app.use('/assets', express.static(path.join(__dirname, 'assets')));

app.get('/', (req, res) => {

    res.sendFile(__dirname + '/index.html');
});

io.of('/stream').on('connection', stream);

server.listen(3030, () => {
    console.log("Server listening on port 3030!")
});