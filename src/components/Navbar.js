import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from 'react-router-hash-link';

const LogoSVG = ({ isTabletView, isMobileView }) => {
  if (isTabletView) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="180" height="36">
        <text x="40" y="35" fontFamily="Verdana" fontSize="32" fill="#fff" textAnchor="middle">CardCraft</text>
      </svg>
    );
  } else if (isMobileView) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="200" height="40">
        <text x="125" y="35" fontFamily="Verdana" fontSize="24" fill="#fff" textAnchor="middle">CardCraft</text>
      </svg>
    );
  } else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 250 50" width="200" height="40">
        <text x="125" y="35" fontFamily="Verdana" fontSize="24" fill="#fff" textAnchor="middle">CardCraft</text>
      </svg>
    );
  }
};

const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isTabletView, setIsTabletView] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsTabletView(screenWidth >= 768 && screenWidth <= 1024);
      setIsMobileView(screenWidth < 768);
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      setNavbarHeight(navbar.offsetHeight);
    }
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""} style={{ backgroundColor: "#000", color: "#fff" }}>
      <Container>
        <Navbar.Brand href="/">
          <div className="logo-container">
            <LogoSVG isTabletView={isTabletView} isMobileView={isMobileView} />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleMenu} style={{ borderColor: "#fff" }}>
          <span className="navbar-toggler-icon" style={{ color: "#fff" }}></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? 'show' : ''}>
          <Nav className={isTabletView ? 'mx-auto' : 'ms-auto'}>
            <Nav.Link
              href="#home"
              className={`${activeLink === 'home' ? 'active' : ''} navbar-link me-5`}
              onClick={() => onUpdateActiveLink('home')}
              style={{ color: "#fff" }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={`${activeLink === 'skills' ? 'active' : ''} navbar-link me-5`}
              onClick={() => onUpdateActiveLink('skills')}
              style={{ color: "#fff" }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={`${activeLink === 'projects' ? 'active' : ''} navbar-link me-5`}
              onClick={() => onUpdateActiveLink('projects')}
              style={{ color: "#fff" }}
            >
              Projects
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <HashLink to='#connect'>
              <button className="btn btn-outline-light rounded-pill">
                Buy Now
              </button>
            </HashLink>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
