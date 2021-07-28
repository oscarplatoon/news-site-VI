import React, { Component, useState, useEffect } from 'react';
import ArticleList from '../components/ArticleList/ArticleList.js';
import { fetchArticles } from '../api/ArticlesAPI';
import { Form, FormControl, Button, Alert } from 'react-bootstrap';
// import News from '../data/news.json';

// class HomePage extends Component {
//   state = {
//     articles: null,
//   }

//   componentDidMount() {
//     fetchArticles()
//     .then(res => {
//       this.setState({
//         articles: res
//       })
//     })
//   }
//   render() {
//     return (
//       <div>
//         { this.state.articles &&
//           <ArticleList articles={this.state.articles} handleTitleClick={(articleID) => this.props.history.push(`/articles/${articleID}`)  } />
//         }
//       </div>
//     );
//   }
// }

const HomePage = (props) => {
  const { query } = props;
  const [articles, setArticles] = useState('');
  const [message, setMessage] = useState(null)

  useEffect(() => {
    const fetchArticlesAsync = async () => {
      try {
          const articlesJson = await fetchArticles(query);
          setArticles(articlesJson);
          if (query) {
            setMessage(`Your search returned ${articlesJson.length} articles.`)
          }
      } catch (e) {
        console.error('error fetching articles: ', e);
      }
    };

    if (!articles.length || query) {
      fetchArticlesAsync();
    }
  }, [query])


  // const handleSearch = (evt) => {
  //   evt.preventDefault()
  //   let searchQuery = evt.target.search.value;
  //   try {
  //     if (searchQuery.length) {
  //       fetchArticles(searchQuery)
  //       .then(articles => {
  //         setArticles(articles)
  //         setMessage(`Your search returned ${articles.length} articles. `)
  //       })
  //     }
  //   }
  //   catch(err) {
  //     console.error(err)
  //   }
  // }

  return (
    <div>
      {
        message && <Alert variant='info'>{ message }</Alert>
      }
      { articles &&
        <ArticleList articles={articles} />
      }
    </div>
  );
}


export default HomePage;
