import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import PL_LOGO from "../assets/pl-logo.png";
import "../components-css/NavBar.css";

function NavBar() {
    return (
        <Navbar expand="lg" bg="primary" data-bs-theme="dark">
            <Container fluid>
                <Navbar.Brand as={Link} to="/dashboard" id="navbar-brand">
                    <img src={PL_LOGO} alt="PL LOGO" id="pl-logo" />
                    PhysiLearn
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: "100px" }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/dashboard">
                            Dashboard
                        </Nav.Link>
                        <Nav.Link as={Link} to="/courses">
                            My Courses
                        </Nav.Link>
                        <NavDropdown title="More" id="navbarScrollingDropdown">
                            <NavDropdown.Item as={Link} to="/profile">
                                Profile
                            </NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/settings">
                                Settings
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/logout">
                                Logout
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
