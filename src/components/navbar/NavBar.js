import { Navbar, Nav, Container, NavbarBrand } from "react-bootstrap"
import { useNavigate } from 'react-router';
import PropTypes from 'prop-types'

import logo from './img/logo.png';


const NavBar = ({ alive, dead, all }) => {

    const history = useNavigate()

    return (
        <Navbar bg="light">
            <Container>
                <Navbar.Brand style={{ cursor: "pointer" }} onClick={() => history(`/`)}>
                    <img
                        src={logo}
                        width="95px"
                        className="d-inline-block align-top"
                        alt="Rick and Morty logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <NavbarBrand>COVID LIVE</NavbarBrand>
                </Nav>
            </Container>
        </Navbar>
    )
}
NavBar.propTypes = {
    alive: PropTypes.func,
    dead: PropTypes.func,
    all: PropTypes.func
}
export default NavBar