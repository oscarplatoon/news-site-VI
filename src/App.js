import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import AppNav from './components/AppNav/AppNav.js';
import HomePage from './pages/HomePage';
import ArticlePage from './pages/ArticlePage';
import SectionPage from './pages/SectionPage.js';
import AddArticlePage from './pages/AddArticlePage.js';
import Login from './pages/LoginPage.js';
import UserContext from './contexts/UserContext.js';

// class App extends Component {

//   render() {

//     return (
//       <div>
//       <Router>
//           <AppNav />
//           <div>
//             <Route exact path="/" component={HomePage} />
//             <Route exact path="/articles/:articleID" component={ArticlePage} />
//             <Route exact path="/sections/:sectionID" component={SectionPage} />
//             <Route exact path="/add-article" component={AddArticlePage} />
//             <Route exact path="/login" component={Login} />
//           </div>
//         </Router>
//       </div>
//     );
//   }
// }

// --- Functional Component
const App = () => {
  const [query, setQuery] = useState(null);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleLogin = (user) => {
    if (user.message) {
      setError(user.message);
      setUser(null);
    } else {
      setError(null);
      setUser(user.user);
    }
  }

  const handleSearch = (evt) => {
    evt.preventDefault()
    let searchQuery = evt.target.search.value;
    setQuery(searchQuery);
  }

  const renderHomePage = () => {
    return (
      <HomePage query={query} />
    )
  }

  const renderLoginPage = (props) => {
    return (
      <Login
        history={props.history}
        handleLogin={handleLogin} />
    )
  }

  const renderLogout = (props) => {
    setUser(null)
    localStorage.removeItem('token');
    return props.history.push('/login')
  }


  const renderSectionPage = () => {
    return (
      <SectionPage
        query={query}
      />
    )
  }

  console.log("USER: ", user)
  return (
    <div>
      <Router>
        <UserContext.Provider value={{ user: user, setUser: handleLogin, error: error }}>
          <AppNav handleSearch={handleSearch} />
          <div>
            <Route exact path="/" render={renderHomePage} />
            <Route exact path="/articles/:articleID" component={ArticlePage} />
            <Route exact path="/sections/:sectionID" render={renderSectionPage} />
            <Route exact path="/add-article" component={AddArticlePage} />
            <Route exact path="/login" render={renderLoginPage} />
            <Route exact path="/logout" render={renderLogout} />
          </div>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
