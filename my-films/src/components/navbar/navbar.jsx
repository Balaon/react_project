import React from 'react'
import * as PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';


function NavBar() {

    return ( <div>
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">MyFilms</NavbarBrand>
          <Nav className="mr-2" >
            <NavItem>
              <NavLink href="/">Войти</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/">Регистрация</NavLink>
            </NavItem>
          </Nav>
          
      
        </Navbar>
      </div>
    );
}

export default NavBar;


