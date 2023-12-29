import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Button, Stack, Image } from 'react-bootstrap';
import { useCarritoContext } from '../context/CarritoContext';

const Carrito = () => {
  const { carritoPizzas, total, disminuirCantidad, aumentarCantidad } = useCarritoContext();

  return (
    <Row className='justify-content-center mt-5'>
      <Col xs={12} md={6}>
        <h1>Detalle del pedido</h1>
          {carritoPizzas.map(pizza => (<>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Stack direction="horizontal" gap={3}>
                <Image src={pizza.img} alt={pizza.name} style={{ width: 80 }} />
                {pizza.name}
              </Stack>
              <Stack direction="horizontal" gap={3}>
                <div style={{ color: 'green' }}>${pizza.price * pizza.cantidad}</div>
                <Button onClick={() => aumentarCantidad(pizza.id)}>+</Button>
                <div>{pizza.cantidad}</div>
                <Button variant="danger" onClick={() => disminuirCantidad(pizza.id)}>-</Button>
              </Stack>
            </div>
            <hr />
          </>))}
        <h3>
          Total a Pagar: ${total}
        </h3>
        <Button variant='success'>Ir a Pagar</Button>
      </Col>
    </Row>
  );
};

export default Carrito;
