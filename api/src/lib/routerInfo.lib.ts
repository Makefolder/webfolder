import { createRoute } from '@hono/zod-openapi';
import type { ResponseContent } from './jsonResponse.lib';

type Method = 'get' | 'put' | 'post' | 'patch' | 'head' | 'delete' | 'options';

export function createInfo(
  tag: string,
  method: Method,
  path: string,
  responses: { [statuscode: string]: ResponseContent }
) {
  return createRoute({
    tags: [tag],
    method: method,
    path,
    responses,
  });
}
