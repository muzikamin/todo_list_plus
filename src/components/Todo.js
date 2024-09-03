import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Checkbox, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { Delete } from "./Delete";
import { useRef, useState } from "react";

export const Todo = ({ todos, setTodos }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  const [currentId, setCurrentId] = useState(); //클릭한 아이디 값 저장

  const onClickFinish = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, finish: !todo.finish } : todo
      )
    );
  };

  const onClickDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <Box w={"95%"} m={"0 auto"}>
      {todos.length > 0 ? (
        <>
          {todos.map((data) => (
            <HStack
              display="flex"
              justifyContent="space-between"
              key={data.id}
              // bg={isDark}
            >
              <Checkbox
                onChange={() => onClickFinish(data.id)}
                isChecked={data.finish}
              >
                <Box margin="10px">
                  <Text
                    textDecoration={data.finish ? "line-through" : ""}
                    marginBottom="5px"
                  >
                    {data.title}
                  </Text>
                  <Text fontSize="14px" opacity="0.7">
                    {data.date}
                  </Text>
                </Box>
              </Checkbox>

              <DeleteIcon
                onClick={() => {
                  onOpen();
                  setCurrentId(data.id); //현재 데이터 값의 id
                }}
                opacity={"0.8"}
              />
            </HStack>
          ))}
        </>
      ) : (
        <Text>할 일을 적어주세요</Text>
      )}

      <Delete
        isOpen={isOpen}
        onClose={onClose}
        cancelRef={cancelRef}
        currentId={currentId}
        onClickDelete={onClickDelete}
      />
    </Box>
  );
};
