import { Box, Heading, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export const TextTodo = ({ todos, setTodos }) => {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDay() + 1;

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const { todo: text } = data;
    setTodos([
      ...todos,
      {
        id: Date.now(),
        title: text,
        finish: false,
        date: `${year}년 ${month}월 ${day}일`,
      },
    ]);

    reset();
  };

  return (
    <VStack w="100%" maxW="450px">
      <Box w="100%" as="form" onSubmit={handleSubmit(onSubmit)}>
        <Input
          m="30px 0"
          h="50px"
          {...register("todo", {
            required: "내용을 입력해주세요.",
          })}
          placeholder="Fill Your To-Do List!"
        />
      </Box>
    </VStack>
  );
};
