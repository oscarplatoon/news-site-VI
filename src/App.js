import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import './App.css';
import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage.js';
import LoginPage from './pages/LoginPage.js';
import AddArticlePage from './pages/AddArticlePage.js';
import ArticlePage from './pages/ArticlePage.js';
import SectionPage from './pages/SectionPage.js';
import UserContext from './contexts/UserContext';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      error: null,
    };
  }
  
  handleLogin = (user) => {
    if (user.error) {
      this.state = this.setState({
        user: null,
        error: user.error.message,
      });
      alert("Invalid login credentials entered");
    }
    else {
      this.state = this.setState({
        user: user.user,
        error: null,
      });
      alert("Login successful");
    }
  }

  render() {

    const renderLoginPage = (props) => {
      return (
        <LoginPage history={props.history} handleLogin={this.handleLogin} />
      )
    }

    const renderLogout = (props) => {
      this.setState({
        user:null,
        error:null,
      })
      return (
        <Redirect to="/login" />
      )
    }

    return (
      <div>
        <UserContext.Provider value={{ user: this.state.user }}>
          <Router>
            <div>
              <AppNav />
              <Route exact path="/" component={HomePage} />
              <Route exact path="/login" render={renderLoginPage} />
              <Route exact path="/logout" render={renderLogout} />
              <Route exact path="/add-article" component={AddArticlePage} />
              <Route exact path="/articles/:articleID" component={ArticlePage} />
              <Route exact path="/sections/:sectionID" component={SectionPage} />
            </div>
          </Router>
        </UserContext.Provider>
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
