import { useState } from "react";
import Authentication from "./Authentication";

function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  function handleLoginSubmit(evt) {
    evt.preventDefault();
    props.onSubmitButton(email, password);
  }

  return (
    <Authentication
      onSubmitButton={handleLoginSubmit}
      title={"Вход"}
      onEmailInput={handleEmailInput}
      onPasswordInput={handlePasswordInput}
      btnText={"Войти"}
      subBtnText={""}
      linkRoute={""}
    />
  );
}

export default Login;
