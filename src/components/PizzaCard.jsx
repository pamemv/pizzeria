import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCarritoContext } from '../context/CarritoContext'; 
import { FaShoppingCart } from 'react-icons/fa';

const PizzaCard = ({ pizza }) => {
  const { agregarAlCarrito } = useCarritoContext();

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pizza.img} />
      <Card.Body>
        <Card.Title>{pizza.name}</Card.Title>
        <hr />
        <Card.Text>
          <p style={{ fontWeight: 'bold' }}>Ingredientes</p>
          <ul>
            {pizza.ingredients.map((ingredient, index) => {
              return <li key={index}>{ingredient}</li>
            })}
          </ul>
          <hr />
          <h2 style={{ textAlign: 'center' }}>${pizza.price}</h2>
        </Card.Text>
        <div style={{ textAlign: 'center' }}>
          <Link to={`/pizza/${pizza.id}`} className="btn btn-info" style={{ width: 100, color: 'white' }}>
            Ver más 
          </Link>
          <Button variant="danger" style={{ width: 100, marginLeft: 5 }} onClick={() => agregarAlCarrito(pizza)}>Añadir <FaShoppingCart size={17} /></Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PizzaCard;