import { serve } from 'bun';
import app from './index';
import env from './config';

const PORT = env.PORT;
const MODE = env.NODE_ENV;

console.log(`Server running on port ${PORT} in ${MODE} mode`);
serve({
  fetch: app.fetch,
  port: PORT,
});
