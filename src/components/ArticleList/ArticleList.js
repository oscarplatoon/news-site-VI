import React, { Component } from 'react';
import ArticleTeaser from '../ArticleTeaser/ArticleTeaser';
import {ListGroup} from 'react-bootstrap'
import moment from 'moment';

class ArticleList extends Component {

  getAllTeasers = (articles) => {
    return articles.map((article, id) => {
      return <ListGroup.Item key={id} className='shadow p-3 mb-5 bg-white rounded border-0 m-2'>
        <ArticleTeaser
          id={id+1}
          created_date={moment(article.created_date).format("MM-DD-YYYY")}
          title={article.title}
          handleTitleClick={this.props.handleTitleClick}
          />
      </ListGroup.Item>
    })
  }

  render() {
    return (
      <div>
            {
        this.getAllTeasers(this.props.articles)
      }
      </div>
    );
  }
}

export default ArticleList;
