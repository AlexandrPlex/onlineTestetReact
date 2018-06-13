import { Router } from 'express';
import { connection } from '../connect';
import { db_table, db } from '../../etc/config';

const loginRoutes = Router();

loginRoutes.post('/', (req, res)=>{


    connection.query(`SELECT * FROM \`${db.database}\`.\`${db_table.users}\` WHERE \`login\`='${req.body.login}' && \`password\`='${req.body.password}';`, function (error, results, fields) {
        if (error) throw error;
        if( results !== undefined ){
            res.send('true');
        }else{
            res.send('false');
        }
    });
});

export default loginRoutes;