import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { TodoUpdateManyMutationInputSchema } from '../inputTypeSchemas/TodoUpdateManyMutationInputSchema'
import { TodoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/TodoUncheckedUpdateManyInputSchema'
import { TodoWhereInputSchema } from '../inputTypeSchemas/TodoWhereInputSchema'

export const updateManyTodoCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyTodoCreateManyAndReturnArgs> = z.object({
  data: z.union([ TodoUpdateManyMutationInputSchema,TodoUncheckedUpdateManyInputSchema ]),
  where: TodoWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.updateManyTodoCreateManyAndReturnArgs>;

export default updateManyTodoCreateManyAndReturnArgsSchema;
