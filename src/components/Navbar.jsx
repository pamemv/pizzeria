import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { useCarritoContext } from '../context/CarritoContext'; 
import { FaShoppingCart } from 'react-icons/fa';
import '../app.css';

function NavbarComponent() {
  const { total } = useCarritoContext();

  return (
    <Navbar bg="dark" variant="dark" id="myNavbar">
      <Container className='justify-content-between'>
        <Navbar.Brand href="/">Pizzeía Mamma Mia!</Navbar.Brand>
        <Nav>
          <NavLink to="/carrito">
            <FaShoppingCart size={20} />
          </NavLink>
          <div style={{ color: 'white', marginLeft: 10 }}>
            Total: $ {total}
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavbarComponent;