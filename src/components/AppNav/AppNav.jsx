import { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';
import sections from '../../data/sections.json'
import "./appNav.css"
import 'bootstrap/dist/css/bootstrap.css'


function AppNav(props) {
  const [navItems, setNavItems] = useState(sections)

  // function that will navigate to route
  let navigate = useNavigate()

  const handleNavClick = (section) => {
    // console.log(section)
    navigate(`/sections/${section}`)
  }

  return (
    <Navbar className="bar" id="nav-custom">
      <Navbar.Brand href="#" id="nav-logo">
        <img src="https://raw.githubusercontent.com/gbote/News-Site/main/public/logo.png" width="90" />
        <strong> </strong> GRB's Top Trending News
      </Navbar.Brand>
      <Nav>
      {navItems.map((navItem, i) => (
        <Nav.Link id="navlink-color" key={i} onClick={() => handleNavClick((navItem.value))}>
          {navItem.label}
        </Nav.Link>
      ))}
      </Nav>
    </Navbar>
  )
}

export default AppNav;

