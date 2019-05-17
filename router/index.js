const Router = require('koa-router');
const router = new Router();

const db_connect = require('../data');


router.get('/', async(ctx) =>{
    ctx.body = 'Its koa-router';
});

router.get('/users', (ctx) => {
    try {
        ctx.body = db_connect('SELECT email from public.users_main', []);
    }
    catch(err) {
        console.errno('err', err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});

router.post('/register', (ctx) => {
    try {
        const user = ctx.request.body;
        const a = 'Ururu';
        db_connect('INSERT INTO public.users_main (name, email) VALUES ($1, $2)', [user.name,user.email]);
        ctx.status = 200;
    }
    catch(err) {
        console.error('err', err);
        ctx.status = 500;
        ctx.body = 'Internal error';
    }
});


module.exports = router;
