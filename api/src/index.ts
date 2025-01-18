import env from './config';
import configureOpenApi from './config/openApi.config';
import createApp from './lib';
import * as routers from './routes/index';
import { BotService } from './services';

new BotService(env.ADMIN_CHAT_ID);

const routes = Object.values(routers);

const app = createApp();
configureOpenApi(app);

routes.forEach((route) => {
  app.route('/', route);
});

export default app;
