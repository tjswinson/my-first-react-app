const express = require('express');

const server = express();

server.get('/heartbeat', (req,res) => {
    res.json({
        "is":"working"
    });
});

server.listen('8080', () => {
    console.log('server is listening at port 8080');

});