//libraries
require('dotenv').config();
const express = require('express');
const path = require('path');
const Geocodio = require('geocodio-library-node');

const { API_KEY, PORT } = process.env;

//instantiations
const geocoder = new Geocodio(API_KEY);
const server = express();

//middleware
server.use(express.static(path.resolve(__dirname + '/react-ui/build')));
server.use(express.json());


server.get('/heartbeat', (req,res) => {
    res.json({
        "is":"working"
    });
});

server.post('/location', (req, res) => {
    const {address} = req.body;
    
  geocoder.geocode(address)
  .then(response => {
    res.json({response})
  })
  .catch(err => {
    res.json({err})
  }
);
})


server.get('*', (req, res)=> {
    res.sendFile(path.resolve(__dirname, './react-ui/build', 'index.html'));
});

server.listen(PORT, () => {
    console.log(`server is listening at port ${PORT}`);

});
