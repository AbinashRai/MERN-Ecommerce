import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <Container className="small-container">
      <title>Sign Up</title>
      <h1 className="my-3">Sign Up</h1>
      <Form>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="confirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" required />
        </Form.Group>

        <div className="mb-3">
          <Button type="submit">Sign Up</Button>
        </div>

        <div className="mb-3">
          Already have an account? <Link to={`/`}>Sign In</Link>
        </div>
      </Form>
    </Container>
  );
};

export default SignUpPage;
