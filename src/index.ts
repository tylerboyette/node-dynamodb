import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as bodyParser from 'koa-bodyparser';
import * as Aws from 'aws-sdk';

// Setting up AWS
Aws.config.loadFromPath('./.aws/config.json');

// App components
import koaConfig from './config/koa';
import {
    addOne as usersAddOne,
    getOne as usersGetOne,
} from './controllers/users_controller';

const app = new Koa();

const router = new Router();

// Set up routes
router
    .get('/users/:id', usersGetOne)
    .put('/users/:id', usersAddOne);

// Applying middleware
app.use(bodyParser());
app.use(router.routes());

app.listen(koaConfig.port);
