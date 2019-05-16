const Router = require('koa-router');
const router = new Router();

const db_connect = require('../data');


router.get('/', async(ctx) =>{
   ctx.body = 'Its koa-router';
});

router.get('/users', (request, response) => {
    db_connect('SELECT email from public.users_main', (error, result) => {
        if (error) throw error;

        response.send(result);
    });
});

module.exports = router;
