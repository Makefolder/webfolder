import * as HttpStatus from 'stoker/http-status-codes';
import { AppBindings } from '@/lib';
import { Context } from 'hono';

class IndexHandler {
  constructor() {
    this.getAboutMe = this.getAboutMe.bind(this);
    this.getAll = this.getAll.bind(this);
  }

  getAboutMe(ctx: Context<AppBindings>) {
    return ctx.json(
      {
        message: 'about me',
      },
      HttpStatus.OK
    );
  }

  getAll(ctx: Context<AppBindings>) {
    return ctx.json(
      {
        message: 'test',
      },
      HttpStatus.OK
    );
  }
}

export const indexHandler = new IndexHandler();
