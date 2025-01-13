import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserUpdateManyMutationInputSchema } from '../inputTypeSchemas/UserUpdateManyMutationInputSchema'
import { UserUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/UserUncheckedUpdateManyInputSchema'
import { UserWhereInputSchema } from '../inputTypeSchemas/UserWhereInputSchema'

export const updateManyUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.updateManyUserCreateManyAndReturnArgs> = z.object({
  data: z.union([ UserUpdateManyMutationInputSchema,UserUncheckedUpdateManyInputSchema ]),
  where: UserWhereInputSchema.optional(),
}).strict() as z.ZodType<Prisma.updateManyUserCreateManyAndReturnArgs>;

export default updateManyUserCreateManyAndReturnArgsSchema;
