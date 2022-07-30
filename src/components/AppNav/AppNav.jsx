import {Navbar, Nav, NavLink, Form, FormControl, Button} from 'react-bootstrap'
import "./appNav.css"
import sections from '../../data/sections.json'
import { useNavigate, Link } from "react-router-dom"
import { useState } from 'react';

function AppNav() {
  const [navItems, setNavItems] = useState(sections)

  let eachNav = navItems.map((item, index) => <NavLink  key={`${item}-${index}`} onClick={() => handleNavClick(item.value)} >{item.label}</NavLink>)
  const navigate = useNavigate()
  const handleNavClick = (section) => { 
    navigate(`/sections/${section}`)
  }

  return (
    <div className='nav-container'>
      <Navbar className='bar ml-auto'>
        <Navbar.Brand>
          <Link className='home-link' to='/'>
            <img src="/logo.png" width="85" /> <strong></strong> 
            GRB's Top Trending News
          </Link>
        </Navbar.Brand>
          <Nav className="me-auto">
              {eachNav}
          </Nav>
          <Form className="d-flex">
            <FormControl type="search" placeholder="Search" className="search me-2" aria-label="Search"/>
        </Form>
      </Navbar>
    </div>

  )
}

export default AppNav;