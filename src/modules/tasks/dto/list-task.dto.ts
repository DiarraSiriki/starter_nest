import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';
import { prioritySchema } from './create-task.dto.js';

export const ListTaskSchema = z.object({
	completed: z
		.enum(['true', 'false'])
		.transform((value) => value === 'true')
		.optional(),

	priority: prioritySchema.optional(),
});

export class ListTaskDto extends createZodDto(ListTaskSchema) {}
