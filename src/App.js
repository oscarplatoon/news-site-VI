import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
        user: null,

    }

    handleLogin = (user) => {
        this.setState({
            user: user
        })
    }

    renderLoginPage = (props) => {  // props refers to props that Router provides to its children (e.g. location, match, history)
        return (
            <LoginPage
                history={props.history}
                handleLogin={this.handleLogin} />
        )
    }

    renderLogout = (props) => {
        this.setState({ user: null })
        return (
            <Redirect to="/login" />
        )
    }


    render() {
        return (
            <div>
                <Router>
                    <UserContext.Provider value={{ user: this.state.user }}>
                        <AppNav />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/login" render={this.renderLoginPage} />
                        <Route exact path="/add-article" component={AddArticlePage} />
                        <Route exact path="/articles/:articleID" component={ArticlePage} />
                        <Route exact path="/sections/:sectionID" component={SectionPage} />
                        <Route exact path="/logout" render={this.renderLogout} />
                    </UserContext.Provider>
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
