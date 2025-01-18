import env from '@/config';
import { OpenAPIHono } from '@hono/zod-openapi';
import { serveEmojiFavicon } from 'stoker/middlewares';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

export interface AppBindings {
  Variables: {
    chatId: number;
    isAdmin?: boolean;
  };
}

export type AppOpenApi = OpenAPIHono<AppBindings>;

export function createRouter() {
  const app = new OpenAPIHono<AppBindings>({
    strict: false,
  });
  return app;
}

export default function createApp() {
  const app = createRouter().basePath(env.BASE_PATH);

  app.use(serveEmojiFavicon('📂'));
  app.use(cors());
  app.use(logger());

  app.notFound((ctx) => {
    return ctx.json({ message: 'Not Found' }, 404);
  });

  app.onError((err, ctx) => {
    console.error(err);
    return ctx.json({ message: 'Something went wrong' }, 500);
  });

  return app;
}
