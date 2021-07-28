import React, { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap'
import { addArticle } from '../api/ArticlesAPI'

const AddArticlePage = (props) => {
  const [message, setMessage] = useState(null)

  const handleFormSubmit = async (evt) => {
    evt.preventDefault()
    let articleObject = {
      title: evt.target.title.value || null,
      byline: evt.target.byline.value || null,
      abstract: evt.target.abstract.value || null
    }
    let response = await addArticle(articleObject, localStorage.getItem('token'));
    if (response.message) {
      setMessage(response.message)
    } else {
      props.history.push(`/articles/${response.id}`)
    }
  }

  return (
    <div>
      {
        message
        &&
        <Alert className='m-3' variant='danger'>There was an issue posting your article. Try again.</Alert>
      }
      <h1 className='m-3'>Add New Article</h1>
      <Form onSubmit={handleFormSubmit}>
        <Form.Group controlId="formBasicEmail" className='m-3'>
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name='title' placeholder="Title" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className='m-3'>
          <Form.Label>Byline</Form.Label>
          <Form.Control type="text" name='byline' placeholder="This is the byline" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword" className='m-3'>
          <Form.Label>Abstract</Form.Label>
          <Form.Control type="text" name='abstract' placeholder="This is the abstract" />
        </Form.Group>
        <Button variant="outline-primary" size="lg" className='m-3' block type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default AddArticlePage;
