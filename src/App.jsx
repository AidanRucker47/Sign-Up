import "./App.css";
import SignUpForm from "./components/signupform";
import Authenticate from "./component/authentication/Authenticate";
import { useState } from "react";

function App() {
  const [token, setToken] = useState(null);
  return (
    <>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </>
  );
}

export default App;
