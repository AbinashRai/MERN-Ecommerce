import { Container, Nav, Navbar } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className="d-flex flex-column vh-100">
        <header>
          <Navbar bg="dark" variant="dark" expand="ld">
            <Container>
              <Navbar.Brand>ExpressCart</Navbar.Brand>
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
