  import axios from "axios";
  import { useState } from "react";
  import { Button, Container, Form } from "react-bootstrap";
  import { useNavigate } from "react-router-dom";

  const LoginPage = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const navigate = useNavigate();

    axios.defaults.withCredentials = true;

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      axios
        .post("http://localhost:4000/login", { email, password })
        .then((result) => {
          console.log(result);
          if (result.data == "Success") {
            navigate("/");
          }
        })
        .catch((err) => console.log(err));
    };

    return (
      <Container className="wrapper">
        <h1 className="my-3">Login</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="mb-3 text-center">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </Container>
    );
  };

  export default LoginPage;
