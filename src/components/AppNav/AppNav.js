import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, NavItem, Input, InputGroup } from 'reactstrap';
import navItems from '../../config/Sections.json';
import UserContext from '../../contexts/UserContext';
import logo from '../../data/logo.svg';

class AppNav extends Component {
  
  async handleSearch(event) {
    const textToSearchFor = event.target.value;
    try {
      let articlesJson;
      if (!textToSearchFor) {
        articlesJson = await fetchArticles();
      } else {
        articlesJson = await searchArticles(textToSearchFor);
      }
      this.setState({ articles: articlesJson });
    } catch (e) {
      console.error('error searching articles: ', e);
    }
  }

  render() {
    return (
      <div>
        <UserContext.Consumer>
        {userContext => (
            <Navbar color="dark" expand="lg">
              <img src={logo} className="App-logo" alt="logo" />
                <NavItem>
                  <Link to="/">
                    HOME
                  </Link> 
                </NavItem>
                {navItems.map((navItem) =>
                    <NavItem>
                        <Link to={`/sections/${navItem.value}`} >
                            {navItem.label}
                        </Link>
                    </NavItem>
                )}
                {userContext.user ? (
                    <NavItem>
                        <Link to="/add-article">Add an Article</Link>
                    </NavItem>
                ) : null}
                {userContext.user ? (
                    <NavItem>
                        <Link to="/logout">LOGOUT</Link>
                    </NavItem>
                ) : (
                    <NavItem>
                        <Link to="/login">LOGIN</Link>
                    </NavItem>)}
            </Navbar> ) } 
      </UserContext.Consumer>
      <InputGroup>
        <Input onChange={(e) => this.handleSearch(e)} type="text" placeholder="Search" />
      </InputGroup>
    </div>
    )
  }
}

export default AppNav;


// Functional solution:
// function AppNav() {
//   return (
//     <Navbar color="light">
//       {navItems.map((navItem) =>
//         <NavItem>
//           <Link to={`/sections/${navItem.value}`} >
//             {navItem.label}
//           </Link>
//         </NavItem>
//       )}
//       <NavItem>
//         <Link to="/add-article">Add an Article</Link>
//       </NavItem>
//     </Navbar>
//   );
// }
