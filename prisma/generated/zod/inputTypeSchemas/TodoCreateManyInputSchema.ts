import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const TodoCreateManyInputSchema: z.ZodType<Prisma.TodoCreateManyInput> = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  completed: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict() as z.ZodType<Prisma.TodoCreateManyInput>;

export default TodoCreateManyInputSchema;