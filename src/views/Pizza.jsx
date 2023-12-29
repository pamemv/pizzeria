import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button } from 'react-bootstrap';
import { useCarritoContext } from '../context/CarritoContext';
import Image from 'react-bootstrap/Image';
import pizzasData from '../data/pizzas';
import { FaShoppingCart } from 'react-icons/fa';

const Pizza = () => {
    const { id } = useParams();
    const { agregarAlCarrito } = useCarritoContext();
    const pizza = pizzasData.find(pizza => pizza.id === id);
    return (
      <div>
        <Row className='justify-content-center mt-5'>
          <Col xs={12} md={4}>
            <Image src={pizza.img} alt={pizza.name} fluid style={{ height: '100%' }} />
          </Col>
          <Col xs={12} md={4}>
            <h2>{pizza.name}</h2>
            <hr />
            <p>{pizza.desc}</p>
            <p style={{ fontWeight: 'bold' }}>Ingredientes</p>
            <ul>
                {pizza.ingredients.map((ingredient, index) => {
                return <li key={index}>{ingredient}</li>
                })}
            </ul>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h4>Precio: ${pizza.price}</h4>
                <Button variant="danger" style={{ width: 100, marginLeft: 5 }} onClick={() => agregarAlCarrito(pizza)}>Añadir <FaShoppingCart size={17} /></Button>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
  
  export default Pizza;