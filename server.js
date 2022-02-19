require('dotenv').config();
const express = require('express');
const path = require('path');

const server = express();

server.use(express.static(path.resolve(__dirname + '/react-ui/build')));

const { PORT } = process.env;
server.get('/heartbeat', (req,res) => {
    res.json({
        "is":"working"
    });
});

server.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);

});
