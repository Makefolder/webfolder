import type { AppOpenApi } from '@/lib/index';
import { apiReference } from '@scalar/hono-api-reference';
import env from '.';

export default function configureOpenApi(app: AppOpenApi) {
  if (env.NODE_ENV === 'development') {
    app.doc('/doc', {
      openapi: '3.0.0',
      info: {
        title: 'RESTful API',
        version: '1.0',
      },
    });

    app.get(
      '/reference',
      apiReference({
        theme: env.DOCS_THEME,
        layout: env.DOCS_LAYOUT,
        defaultHttpClient: {
          targetKey: 'js',
          clientKey: 'axios',
        },
        spec: {
          url: `${env.BASE_PATH}/doc`,
        },
      })
    );
  }
}
