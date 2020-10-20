const express = require('express');
const { createServer } = require('http');
const socketIo = require('socket.io');
const { join } = require('path');

const app = express();

const serverHttp = createServer(app);
const io = socketIo(serverHttp);

io.on('connection', (client) => 
{
    client.on('stream', (image) => 
    {
        client.broadcast.emit('stream', image);
    });
});

app.use(require('./routes/littlezoom.routes.js'));
app.use(express.static(join(__dirname, 'public')));

module.exports = serverHttp;