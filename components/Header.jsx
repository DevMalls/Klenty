import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Headerstyles from "../styles/Header.module.css";
import KlentyLogo from "../public/images/BigLogo.png";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import * as data from '../utils/data';

const Header = () => {
  const getNavLink = () => {
    return data.navLinks.map((link, index) => {
      return (
        <Nav.Link  href={link.path} className={Headerstyles.nav_link}  key={index}>
        {link.name}
        </Nav.Link>
      );
    });
  };
  return (
    <Row>
      <Col lg={9} md={8} xs={6}>
        <Navbar bg="white" expand="lg">
          <Container className={Headerstyles.container}>
            <Navbar.Brand href="/" className={Headerstyles.navbar_brand}>
              <Image
                src={KlentyLogo}
                alt="Klenty Logo"
                width={130}
                height={60}
              />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbar-nav-menu" className={Headerstyles.navbar_toggle}/>
            <Navbar.Collapse id="navbar-nav-menu">
              <Nav className="me-auto">
                 {getNavLink()}    
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Col>
      <Col lg={3} md={4} xs={6} className={Headerstyles.buttons}>
        <div className={Headerstyles.login_col}>Login</div>

        <div className={Headerstyles.secondary_col}>
          <Button className={Headerstyles.secondary}>
            <span className={Headerstyles.secondary_label}>SCHEDULE DEMO</span>
          </Button>
        </div>

        <div className={Headerstyles.primary_col}>
          <Button className={Headerstyles.primary}>
            <span className={Headerstyles.primary_label}>TRY FOR FREE</span>
          </Button>
        </div>
      </Col>
    </Row>
  );
};
export default Header;
