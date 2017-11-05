import * as Koa from 'koa';
import * as Router from 'koa-router';

import { koa as koaConfig } from './config';
import usersCount from './controllers/users/count';

const app = new Koa();

const router = new Router();

// Set up routes
router
    .get('/users/count', usersCount);

app.use(router.routes());

app.listen(koaConfig.port);
