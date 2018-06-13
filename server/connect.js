import {db} from '../etc/config';
import mysql from 'mysql';

export const connection = mysql.createConnection({
    host     : db.host,
    user     : db.name,
    password : db.password,
    database : db._database
});