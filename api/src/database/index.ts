import env from '@/config';
import { drizzle } from 'drizzle-orm/libsql';

const db = drizzle({
  connection: {
    url: env.DB_URL,
    // authToken: env.DATABASE_AUTH_TOKEN,
  },
});
