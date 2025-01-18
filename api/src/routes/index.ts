import * as HttpStatus from 'stoker/http-status-codes';
import { createRouter } from '@/lib';
import { createInfo } from '@/lib/routerInfo.lib';
import { createRoute } from '@hono/zod-openapi';
import { jsonResponse } from '@/lib/jsonResponse.lib';
import { z } from 'zod';
import { indexHandler } from '@/handlers';

const CardPropSchema = z.object({
  date: z.string(),
  href: z.string().optional(),
  title: z.string(),
  description: z.string(),
  certificate: z.boolean().optional(),
  tags: z.array(z.string()),
});

const SectionSchema = z.object({
  title: z.string(),
  id: z.string(),
  cards: z.array(CardPropSchema),
});

export const getAll = createRouter().openapi(
  createRoute(
    createInfo('Index', 'get', '/get-all', {
      [HttpStatus.OK]: jsonResponse(
        z.object({
          data: z.array(SectionSchema),
        }),
        'Retrieve all section records'
      ),
    })
  ),
  indexHandler.getAll
);
