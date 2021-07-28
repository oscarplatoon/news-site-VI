import React, { Component } from 'react';
import Article from '../components/Article/Article.js';
import { fetchArticleByID } from '../api/ArticlesAPI';
// import News from '../data/news.json';

class ArticlePage extends Component {
  state = {
    article: null
  }

  componentDidMount() {
    fetchArticleByID(this.props.match.params.articleID)
    .then(res => {
      this.setState({
        article: res
      })
    })
  }
  render() {
    return (
      <div>
        {this.state.article && <Article {...this.state.article} />}
      </div>
    )
  }
}

export default ArticlePage;
