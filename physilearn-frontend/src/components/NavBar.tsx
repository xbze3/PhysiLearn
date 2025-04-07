import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PL_LOGO from "../assets/pl-logo.png";
import { Link } from "react-router-dom";
import "../components-css/NavBar.css";

function NavBar() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand as={Link} to={`/dashboard`} id="navbar-brand">
                        <img src={PL_LOGO} alt="PL LOGO" id="pl-logo" />
                        PhysiLearn
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to={`/dashboard`}>
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={Link} to={`/courses`}>
                            My Courses
                        </Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
