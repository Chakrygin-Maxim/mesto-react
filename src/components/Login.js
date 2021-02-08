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
  return (
    <Authentication
      onSubmitButton={props.onSubmitButton}
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
