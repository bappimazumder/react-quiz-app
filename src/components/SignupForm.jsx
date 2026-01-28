import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UseAuth from "../contexts/UseAuth";
import Button from "./Button";
import Checkbox from "./Checkbox";
import Form from "./Form";
import TextInput from "./TextInput";

export default function SignupForm() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agree, setAgree] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState("");

  const { signup } = UseAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (password != confirmPassword) {
      setError("Passwords don't match!");
    }

    try {
      setError("");
      setLoading(true);
      await signup(email, password, userName);
      console.log("||||||||||||||||||");
      navigate("/");
    } catch (err) {
      console.log(err);
      setLoading(false);
      console.log("====================");
      setError("Failed to create an account");
    }
  }

  return (
    <Form style={{ height: "500px" }} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        required
        placeholder="Enter name"
        icon="person"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />

      <TextInput
        type="email"
        required
        placeholder="Enter email"
        icon="alternate_email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Enter password"
        icon="lock"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <TextInput
        type="password"
        required
        placeholder="Confirm password"
        icon="lock_clock"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <Checkbox
        text="I agree with terms & conditions"
        required
        value={agree}
        onChange={(e) => setAgree(e.target.value)}
      />

      {error && <p className="error">{error}</p>}

      <Button disabled={loading} type="submit">
        <span>Submit</span>
      </Button>

      <div className="info">
        Already have an account? <Link to="/login">Login</Link>
      </div>
    </Form>
  );
}
