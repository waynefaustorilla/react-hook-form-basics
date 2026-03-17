import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { type SubmitHandler } from "react-hook-form";
import z from "zod";

const schema = z.object({
  message: z.email()
});

type MessageType = z.infer<typeof schema>;

const App: React.FunctionComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<MessageType>({
    resolver: zodResolver(schema)
  });

  const doSomething: SubmitHandler<MessageType> = async (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(doSomething)}>
      <input type={"text"} {...register("message", { required: `Please enter a message!` })} />

      <pre>{errors.message && errors.message.message}</pre>

      <button type="submit">Click Me!</button>
    </form>
  );
};

export default App;