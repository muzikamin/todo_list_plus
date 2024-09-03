import { Box, Container, Text, useColorMode } from "@chakra-ui/react";
import { LiaToggleOffSolid, LiaToggleOnSolid } from "react-icons/lia";
import { RiLoginCircleLine, RiLogoutCircleLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";

export const Header = () => {
  const loginState = localStorage.getItem("login");
  const navigate = useNavigate();

  const { colorMode, toggleColorMode } = useColorMode(); //차크라에서 제공하는 훅
  const isDark = colorMode === "light" ? "#ebf7f9" : "gray.700";

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
      height="70px"
      bgColor={isDark}
      padding="0 25px"
      alignItems="center"
    >
      <Box onClick={toggleColorMode}>
        {colorMode === "light" ? (
          <LiaToggleOffSolid fontSize="30px" />
        ) : (
          <LiaToggleOnSolid fontSize="30px" />
        )}
      </Box>
      <Link to={"/"}>
        <Text
          fontSize="32px"
          fontWeight="700"
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
