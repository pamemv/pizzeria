import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import PizzaCard from '../components/PizzaCard';
import pizzasData from '../data/pizzas.json';

function Home() {
  return (
    <Container fluid="md mt-5">
      <Row className="justify-content-md-center" style={{ textAlign: 'center' }}>
        <Col md={6}>
          <h1>
            Pizzería Mamma Mia!
          </h1>
          <p>
            ¡Tenemos las mejores pizzas que podrás encontrar!
          </p>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        {pizzasData.map(pizza => (
          <Col key={pizza.id} xs={12} sm={6} md={2} lg={3} className='mt-4'>
            <PizzaCard pizza={pizza} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Home;