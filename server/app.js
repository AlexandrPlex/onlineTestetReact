import express from 'express'; // Подкльчение модуля сервера
import cors from 'cors';
import bodyParser from 'body-parser';
import {serverPort} from '../etc/config.js';
import session from 'express-session';
import MySQLStore from 'mysql-express-session';

const options = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'usbw',
    database: 'onlinetester'
};

const sessionStore = new MySQLStore(options);

const app = express();
app.use(session({
    key: 'session_cookie_name',
    secret: 'session_cookie_secret',
    store: sessionStore,
    resave: true,
    saveUninitialized: true
}));
app.use( bodyParser.json() );
app.use(cors({ origin: '*' }));

// RESTful api handlers


const server = app.listen(serverPort, function() {
    console.log(`Server is up and running on port ${serverPort}`);
});
