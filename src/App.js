import { Container } from "@chakra-ui/react";
import { SignUp } from "./components/SignUp";
import { Main } from "./components/Main";

const App = () => {
  const loginState = localStorage.getItem("login");

  return <>{loginState ? <Main /> : <SignUp />}</>;
};

export default App;
