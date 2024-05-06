import {z} from "zod";

export const formCheckDateSchema = z.object({
    day: z.number().min(2).max(2),
    month: z.number().min(2).max(2),
    year: z.number().min(4).max(4)
})