import { useState } from "react";

export default function SignUpForm({ setToken }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      const rsp = await fetch("https://fsa-jwt-practice.herokuapp.com/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const info = await rsp.json();
      console.log(info);
      setToken(info.token);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <>
      <h2>Sign Up</h2>

      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Username{" "}
          <input
            minLength="8"
            value={username}
            onChange={(event) => {
              console.log(event.target.value);
              setUsername(event.target.value);
            }}
            id="usermame"
          ></input>
        </label>{" "}
        <br />
        <label>
          Password{" "}
          <input
            minLength="8"
            value={password}
            onChange={(event) => {
              console.log(event.target.value);
              setPassword(event.target.value);
            }}
            type="password"
            id="user-password"
          ></input>
        </label>
        <br />
        <button className="pill" type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
