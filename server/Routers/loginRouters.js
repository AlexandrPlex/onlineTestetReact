import { Router } from 'express';

const loginRoutes = Router();

loginRoutes.post('/', (req, res)=>{
    res.send('1');
});

export default loginRoutes;