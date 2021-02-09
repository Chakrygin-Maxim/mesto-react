import { useState } from "react";
import Authentication from "./Authentication";

function Register(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmailInput(evt) {
    setEmail(evt.target.value);
  }

  function handlePasswordInput(evt) {
    setPassword(evt.target.value);
  }

  function handleRegisterSubmit(evt) {
    evt.preventDefault();
    props.onSubmitButton(email, password);
  }

  return (
    <Authentication
      onSubmitButton={handleRegisterSubmit}
      title={"Регистрация"}
      onEmailInput={handleEmailInput}
      onPasswordInput={handlePasswordInput}
      btnText={"Зарегистрироваться"}
      subBtnText={"Уже зарегистрированы?"}
      linkText={"Войти"}
      linkRoute={"/sign-in"}
    />
  );
}

export default Register;
