import express from 'express';

import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';

import {serverPort, secret} from '../etc/config.json';
//import * as db from './utils/DataBaseUtils';

// Initialization of express application
const app = express();

// Set up connection of database
//db.setUpConnection();
// Using bodyParser middleware
app.use( bodyParser.json() );
// Allow requests from any origin
app.use(cors({ origin: '*' }));

const requireToken = (req,res,next) => {
  const token = req.body.token;

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: err.message })
    }
    req.params.userId = decoded._id
    next()
  })
}

// RESTful api handlers

app.get('/login', (req, res) => {
   res.send('ok');
});

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});


