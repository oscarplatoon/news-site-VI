import React, { Component, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap'
import navItems from '../../config/Sections'
import { withRouter } from "react-router";
import UserContext from '../../contexts/UserContext';

// Classed Based Components
// class AppNav extends Component {
//   render() {
//     const {navItems, handleNavClick} = this.props

//     const createNavItems = () => {
//       return navItems.map((navItem, i) => {
//         return <a key={i} href='#' onClick={() => handleNavClick(navItem.value)}>{navItem.label}</a>
//       })
//     }
//     return (
//       <nav>
//       {
//         createNavItems()
//       }
//       </nav>
//     )
//   }
// }

// --- Functional Component
const AppNav = (props) => {
  const { handleSearch } = props;
  const userContext = useContext(UserContext);
  const { user } = userContext;


  const createNavItems = () => {
    return navItems.map((navItem, idx) => {
      return <Nav.Link key={idx} onClick={() => props.history.push(`/sections/${navItem.value}`)}>{navItem.label}</Nav.Link>
    })
  }
  console.log(userContext)
  console.log(props)
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand onClick={() => props.history.push('/')} className='m-2'>News Site</Navbar.Brand>
      <Nav className="me-auto">
        {
          createNavItems()
        }
        {
          user
            ?
            <div>
              <Button href='/logout' variant='outline-danger' className='mx-2'>Logout</Button>
              <Button onClick={() => props.history.push('/add-article')} variant='outline-secondary' className='mx-2'>Add Article</Button>
            </div>
            :
            <Button href='/login' variant='outline-primary' className='mx-2'>Login</Button>
        }
      </Nav>
      <Form className='d-flex' onSubmit={handleSearch}>
        <FormControl type="search" placeholder="Search" className="mr-2" name='search' />
        <Button type='submit' variant="outline-success">Search</Button>
      </Form>
    </Navbar>
  )
}

export default withRouter(AppNav);
