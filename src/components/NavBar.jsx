import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import logo from '../assets/escudo-river.png'

import CartWidget from './CartWidget'
import '../styles/NavBar.css'

const NavBar = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary estilos-navbar">
        <Container>
          <Navbar.Brand>
            <Link to={'/'} className='estilos-elementos-navbar'>
              <img
                alt=""
                src={logo}
                width="30"
                height="30"
                className="d-inline-block align-top"
              />{' '}
              Level Up Games
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">

              <div className='container-elementos-navbar'>

                {/* <div className='elemento-navbar'>
                  <Link className='estilos-elementos-navbar' to={'/'}>
                    Home
                  </Link>
                </div> */}

              </div>

              <NavDropdown title="Categorías" id="basic-nav-dropdown">

                <NavDropdown.Item className='items' as='div'>
                  <Link to="/categoria/consolas" className='texto' >Consolas</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className='items' as='div'>
                  <Link to="/categoria/computadoras" className='texto'>Computadoras</Link>
                </NavDropdown.Item>

                <NavDropdown.Item className='items' as='div'>
                  <Link to="/categoria/accesorios" className='texto'>Accesorios</Link>
                </NavDropdown.Item>

                <NavDropdown.Divider />

                <NavDropdown.Item className='items' as='div'>
                  <Link to="/" className='texto'>Home</Link>
                </NavDropdown.Item>

              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
          <Link to={'/cart'}>
            <CartWidget />
          </Link>
        </Container>
      </Navbar>

    </>
  )
}



export default NavBar