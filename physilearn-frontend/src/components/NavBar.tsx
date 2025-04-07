import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import PL_LOGO from "../assets/pl-logo.png";
import "../components-css/NavBar.css";

function NavBar() {
    return (
        <>
            <Navbar bg="primary" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home" id="navbar-brand">
                        <img src={PL_LOGO} alt="PL LOGO" id="pl-logo" />
                        PhysiLearn
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Dashboard</Nav.Link>
                        <Nav.Link href="#features">My Courses</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
