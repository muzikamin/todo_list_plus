import { Container } from "@chakra-ui/react";
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
    <Container>
      <TextTodo todos={todos} setTodos={setTodos} />
      <Todo />
    </Container>
  );
};
