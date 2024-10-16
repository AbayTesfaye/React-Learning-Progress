import Input from "./Input";
import "../App.css";
function Form(props) {
  return (
    <form>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {!props.isRegister && <Input type="password" placeholder="Confirm" />}
      <button>{props.isRegister ? "Login" : "Register"}</button>
    </form>
  );
}

export default Form;
