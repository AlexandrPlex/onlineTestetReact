import express from 'express'; // Подкльчение модуля сервера
import cors from 'cors';
import bodyParser from 'body-parser';
import jwt from 'jsonwebtoken';
import {serverPort, secret, rootRoutes} from '../etc/config.js';
import loginRoutes from './Routers/loginRouters'

const app = express();

app.use( bodyParser.json() );
app.use(cors({ origin: '*' }));

const requireToken = (req,res,next) => {
  const token = req.headers.token;

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: err.message })
    }
    req.params.userId = decoded._id
    next()
  })
}

// RESTful api handlers

app.use(`/${rootRoutes.auth}`, loginRoutes);

const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});

// app.post('/login', (req, res) => {
//     db.listUsers().then(data => {
//       [...data].map((el)=>{
//         if(el.login === req.body.login && el.password === req.body.password){
//                 let token =jwt.sign({id: data._id, sess: true}, secret);
//           res.send({
//                     isLogin: true,
//                     token: token,
//                     userName: el.name,
//                 });
//         }
//       });
//       res.send({
//             isLogin: false
//       });

//     });
// });

// app.get('/',requireToken,(req, res) =>{
//     db.upData(req.body.collectionName, req.body.data, req.body.id).then(data => {
//         res.send(data);
//     });
// });