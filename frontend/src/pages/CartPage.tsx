import { Button, Card, Col, ListGroup, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { sampleProducts } from "../data";

const CartPage = () => {
  return (
    <div>
      <title>Shopping Cart</title>
      <h1>Shopping Cart</h1>
      <Row>
        <Col md={8}>
          <ListGroup>
            {sampleProducts.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row className="align-items-center">
                  <Col md={4}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="img-fluid rounded thumbnail"
                    />{" "}
                    <Link to={`/product/${item.slug}`}>{item.name}</Link>
                  </Col>
                  <Col md={3}>
                    <Button disabled={item.quantity === 1}>
                      <i className="fas fa-minus-circle"></i>
                    </Button>{" "}
                    <span>{item.quantity}</span>
                    <Button disabled={item.quantity === item.countInStock}>
                      <i className="fas fa-plus-circle"></i>
                    </Button>
                  </Col>
                  <Col md={3}>${item.price}</Col>
                  <Col md={2}>
                    <Button>
                      <i className="fas fa-trash"></i>
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <h3>Subtotal : $200</h3>
                </ListGroup.Item>
                <ListGroup.Item>
                  <div className="d-grid">
                    <Button
                      type="button"
                      variant="primary"
                      disabled={sampleProducts.length === 0}>
                      Proceed to Checkout
                    </Button>
                  </div>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default CartPage;
