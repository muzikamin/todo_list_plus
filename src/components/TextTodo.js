import { Box, Input } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const TextTodo = ({ todos, setTodos }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { todo: text } = data;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: text,
        finish: false,
      },
    ]);
  };

  return (
    <div>
      <Box as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("todo", {
            required: "빈 내용은 안 돼요~",
          })}
          placeholder="무엇을 해야하나요?"
        />
      </Box>
    </div>
  );
};
