require('dotenv').config();
const express = require('express');

const server = express();

const { PORT } = process.env;
server.get('/heartbeat', (req,res) => {
    res.json({
        "is":"working"
    });
});

server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);

});
