import React, { Component } from 'react';

import { Card } from 'react-bootstrap';
import moment from 'moment';

class Article extends Component {
  render() {
    console.log(this.props)
    return (
      <Card style={{ width: '18rem' }}>
        {this.props.image && <Card.Img variant="top" src={this.props.image} />}
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <p>{this.props.byline && this.props.byline}</p>
          <Card.Text>{this.props.abstract}</Card.Text>
          <p>{moment(this.props.created_date).format("MM-DD-YYYY")}</p>
        </Card.Body>
      </Card>
    )
  }
}

export default Article;
