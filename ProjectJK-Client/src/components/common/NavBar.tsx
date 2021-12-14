import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Link to="/" className="navbar-brand">Project - JK</Link>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav><Link to ="/" className="nav-link">달력..?</Link></Nav>
                    </Nav>
                    <Nav><Link to ="/sign-in" className="nav-link">로그인</Link></Nav>
                    <Nav><Link to ="/sign-up" className="nav-link">회원가입</Link></Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar