import { SignUp } from "./components/SignUp";
import { Main } from "./components/Main";
import { Container } from "@chakra-ui/react";

const App = () => {
  const loginState = localStorage.getItem("login");

  return <Container>{loginState ? <Main /> : <SignUp />}</Container>;
};

export default App;
