import { Box, Button, Container, Input, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const LogIn = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const enterusername = localStorage.getItem("username");
  const enterpassword = localStorage.getItem("password");

  const [loginText, setLoginText] = useState();

  const loginHandler = ({ username, password }) => {
    if (enterusername === username && enterpassword === password) {
      alert("로그인 되었습니다");
      navigate("/main");
      localStorage.setItem("login", true);
    } else {
      setLoginText("아이디, 비밀번호를 다시 확인해주세요.");
    }
  };

  return (
    <Container maxW="450px" h="100%" maxH="100vh" bg="skyblue">
      <VStack width="100%" padding="10px">
        <Text fontSize="24px" padding="20px" fontWeight="700">
          로그인
        </Text>
        <Box as="form" width="90%" onSubmit={handleSubmit(loginHandler)}>
          <Text padding="10px 0">{errors?.name?.message}</Text>
          <Input
            marginBottom="15px"
            height="50px"
            width="100%"
            variant="filled"
            {...register("username", {
              required: "아이디를 입력해주세요.",
              pattern: {
                value: /^[a-zA-Z0-9]{4,12}$/,
                message: "4~12자, 영문 대소문자, 숫자로 만들어주세요.",
              },
            })}
            type="text"
            placeholder="아이디"
          />
          <Input
            height="50px"
            width="100%"
            variant="filled"
            {...register("password", {
              required: "비밀번호를 입력해주세요.",
              minLength: {
                value: 8,
                message: "8자리 이상 입력해주세요.",
              },
            })}
            type="password"
            placeholder="비밀번호"
          />
          <Text padding="10px 0">{loginText}</Text>
          <Button
            margin="20px 0"
            height="50px"
            width="100%"
            type="submit"
            style={{
              backgroundColor: isValid ? "#5988D5" : "#fff",
              color: isValid ? "#fff" : "",
              border: "1px solid #5988D5",
            }}
          >
            로그인
          </Button>
        </Box>
      </VStack>
      <Text
        justifyContent="center"
        display="flex"
        padding="10px"
        fontSize="18px"
        textAlign="center"
      >
        아직 회원이 아니라면?&nbsp;
        <Link to="/signup">
          <Text fontWeight="700" color="#5988D5">
            회원가입&nbsp;
          </Text>
        </Link>
        하기
      </Text>
    </Container>
  );
};
