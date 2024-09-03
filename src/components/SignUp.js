import { Box, Button, Container, Input, Text, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";

export const SignUp = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();

  const signHandler = ({ name, username, password }) => {
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    navigate("/logIn");

    alert(`${name} 님, 가입을 환영합니다!`);
  };

  return (
    <Container maxW="450px" maxH="100vh" bg="skyblue">
      <VStack width="100%" padding="10px">
        <Text fontSize="24px" padding="20px" fontWeight="700">
          회원가입
        </Text>
        <Box as="form" width="90%" onSubmit={handleSubmit(signHandler)}>
          <Input
            height="50px"
            width="100%"
            variant="filled"
            {...register("name", {
              required: "이름을 입력해주세요.",
              pattern: {
                value: /^[가-힣]+$/,
                message: "이름은 한글만 입력 가능합니다.",
              },
            })}
            type="text"
            placeholder="이름"
          />
          <Text padding="10px 0">{errors?.name?.message}</Text>
          <Input
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
          <Text padding="10px 0">{errors?.username?.message}</Text>
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
          <Text padding="10px 0">{errors?.password?.message}</Text>
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
            제출하기
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
        이미 회원이라면?&nbsp;
        <Link to="/login">
          <Text fontWeight="700" color="#5988D5">
            로그인&nbsp;
          </Text>
        </Link>
        하기
      </Text>
    </Container>
  );
};
