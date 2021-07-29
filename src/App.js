import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import AddArticlePage from './pages/AddArticlePage.js';
import ArticlePage from './pages/ArticlePage.js';
import SectionPage from './pages/SectionPage.js';
import UserContext from './contexts/UserContext.js';

class App extends Component {

  state = {
    user: null
  }

  handleLogin = (user) => {
    this.setState({
      user: user
    })
  }

  renderLoginPage = (routeProps) => {
    return(
      <LoginPage handleLogin={this.handleLogin} {...routeProps}/>
    )
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <UserContext.Provider value={{user: this.state.user}}>
              <AppNav />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" render={this.renderLoginPage}/>
              <Route exact path="/add-article" component={AddArticlePage} />
              <Route exact path="/articles/:articleID" component={ArticlePage} />
              <Route exact path="/sections/:sectionID" component={SectionPage} />
            </UserContext.Provider>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;


// Functional solution:
// function App() {
//   return (
//     <div>
//       <AppNav />
//       <Router>
//         <div>
//           <Route exact path="/" component={HomePage} />
//           <Route exact path="/add-article" component={AddArticlePage} />
//           <Route exact path="/articles/:articleID" component={ArticlePage} />
//           <Route exact path="/sections/:sectionID" component={SectionPage} />
//         </div>
//       </Router>
//     </div>
//   );
// }
