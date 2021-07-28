import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ArticleTeaser extends Component {
  render() {
    const {
      id,
      title,
      created_date,
      handleTitleClick
    } = this.props;
    return (
      <div>
        <Link to={`/articles/${id}`}>{ title }</Link>
        <p>{ created_date }</p>
      </div>
    )
  }
}

export default ArticleTeaser;
