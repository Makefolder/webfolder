import { ZodObject, ZodRawShape } from 'zod';

export type ResponseContent = {
  content: {
    'application/json': {
      schema: ZodObject<ZodRawShape>;
    };
  };
  description: string;
};

export function jsonResponse(
  obj: ZodObject<ZodRawShape>,
  desc: string
): ResponseContent {
  return {
    content: {
      'application/json': {
        schema: obj,
      },
    },
    description: desc,
  };
}
