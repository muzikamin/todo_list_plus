import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { SignUp } from "./components/SignUp";
import { LogIn } from "./components/Login";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const Router = () => {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </HashRouter>
  );
};
