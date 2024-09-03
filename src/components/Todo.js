import { Box, Checkbox, Container, HStack, Text } from "@chakra-ui/react";

export const Todo = ({ todos, setTodos }) => {
  const onClickFinish = (id) => {
    console.log(id);

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, finish: !todo.finish } : todo
      )
    );
  };

  return (
    <Box>
      {todos.length > 0 ? (
        <>
          {todos.map((data) => (
            <HStack
              key={data.id}
              // bg={isDark}
            >
              <Checkbox
                size={"lg"}
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
            </HStack>
          ))}
        </>
      ) : (
        <Text>할 일을 적어주세요</Text>
      )}
    </Box>
  );
};
