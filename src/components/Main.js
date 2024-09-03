import { calc, Container } from "@chakra-ui/react";
import { Todo } from "./Todo";
import { useEffect, useState } from "react";
import { TextTodo } from "./TextTodo";

export const Main = () => {
  const [todos, setTodos] = useState(() => {
    const registTodo = localStorage.getItem("todos");
    return registTodo ? JSON.parse(registTodo) : [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Container w="100%" maxW="450px" minH="calc(100vh - 140px)">
      <TextTodo todos={todos} setTodos={setTodos} />
      <Todo todos={todos} setTodos={setTodos} />
    </Container>
  );
};
