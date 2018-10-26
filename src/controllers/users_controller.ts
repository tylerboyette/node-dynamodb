import { Context } from "koa";
import UserManager from "../managers/user_manager";
import * as HttpStatus from 'http-status-codes';

async function addOne (ctx: Context) {
    const m = new UserManager();

    // Check for required params
    const email = (ctx.request.body as any).email;
    const password = (ctx.request.body as any).password;

    if (!email || !password) {
        ctx.status = HttpStatus.BAD_REQUEST;
        return;
    }

    m.addOne({
        email,
        password,
    });

    ctx.status = HttpStatus.NO_CONTENT;
};

async function getOne (ctx: Context) {
    const m = new UserManager();

    const user = await m.getOne(ctx.params.id);

    if (user) {
        ctx.body = user;
    }
    else {
        ctx.status = 404;
    }
};

export {
    addOne,
    getOne,
};
