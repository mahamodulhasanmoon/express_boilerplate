import { z } from 'zod';

export const DemoValidationSchema = z.object({
  id: z.string(),
  name: z.string(),
  avatar: z.string(),
});
