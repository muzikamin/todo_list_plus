import { Container, Text } from "@chakra-ui/react";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const loginState = localStorage.getItem("login");
  const navigate = useNavigate();

  const logoutHandler = () => {
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    localStorage.removeItem("name");
    localStorage.removeItem("login");
    alert("로그아웃 되었습니다");

    navigate("/login");
  };

  return (
    <Container
      display="flex"
      justifyContent="space-between"
      maxW="450px"
      maxH="100%"
      height="70px"
      bg="red"
      padding="0 25px"
      alignItems="center"
    >
      <Text>흐앙</Text>
      <Link to={"/"}>
        <Text
          fontSize="32px"
          fontWeight="700"
          color="#333"
          textAlign="center"
          lineHeight="70px"
        >
          DO IT! CHU
        </Text>
      </Link>
      {loginState ? (
        <RiLogoutCircleLine
          fontSize="30px"
          onClick={logoutHandler}
          cursor="pointer"
        />
      ) : (
        <Link to="/login">
          <RiLoginCircleLine fontSize="30px" cursor="pointer" />
        </Link>
      )}
    </Container>
  );
};
