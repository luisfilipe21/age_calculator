import { z } from "zod"

export const formSchema = z.object({
    day: z.string().max(2),
    month: z.string().max(2),
    year: z.string().max(4),
})
