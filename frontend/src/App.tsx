import axios from "axios";
import { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet, useNavigate } from "react-router-dom";

function App() {
  axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/")
      .then((result) => {
        console.log(result);
        if (result.data !== "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="ld">
            <Container>
              <Link to="/">
                <Navbar.Brand>ExpressCart</Navbar.Brand>
              </Link>
            </Container>
            <Nav>
              <Link to="/cart" className="nav-link">
                Cart
              </Link>
              <a href="/signup" className="nav-link">
                Sign In
              </a>
            </Nav>
          </Navbar>
        </header>
        <main>
          <Container className="mt-3">
            <Outlet />
          </Container>
        </main>
        <footer>
          <div className="text-center">All rights reserved</div>
        </footer>
      </div>
    </>
  );
}

export default App;
