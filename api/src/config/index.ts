import { z, ZodError } from 'zod';

const THEME_LIST = [
  'alternate',
  'default',
  'moon',
  'purple',
  'solarized',
  'bluePlanet',
  'saturn',
  'kepler',
  'mars',
  'deepSpace',
  'none',
] as const;

const EnvSchema = z.object({
  ADMIN_CHAT_ID: z.string().optional(),
  ADMIN_NAME: z.string().optional(),

  TG_TOKEN: z.string(),
  DB_URL: z.string(),

  NODE_ENV: z.enum(['production', 'development']).default('production'),
  PORT: z.coerce.number().default(4020),
  BASE_PATH: z.string().default('/api'),

  DOCS_THEME: z.enum(THEME_LIST).default('deepSpace'),
  DOCS_LAYOUT: z.enum(['modern', 'classic']).default('modern'),
});

export type env = z.infer<typeof EnvSchema>;
let env: env;

try {
  env = EnvSchema.parse(Bun.env);
} catch (e: unknown) {
  const error = e as ZodError;
  console.log('❌ Invalid env:');
  console.log(error.flatten().fieldErrors);
  process.exit(1);
}

export default env;
