import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate()

  const handleLogout = () => {
    signOut(auth);
     navigate('/login')
  };

    return ( <div >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand as={Link} to="/">Fresh Fruits & Vegetables</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/inventory">Manage Inventories</Nav.Link>
            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
            
          </Nav>
          <Nav>
          {
            user?.email ? <button onClick={handleLogout} className="logout-btn">Logout</button> : 
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
          }
            
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
    );
};

export default Header;