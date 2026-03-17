import z from "zod";

const messageSchema = z.object({
  message: z.email()
});

export type MessageType = z.infer<typeof messageSchema>;

export default messageSchema;