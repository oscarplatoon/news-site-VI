import React from 'react';
import { Form, Button } from 'react-bootstrap';
import login from '../api/UsersAPI';

const Login = (props) => {
  const { handleLogin } = props;

  const getLoginInfo = async (evt) => {
    evt.preventDefault()
    console.log("Email: ", evt.target.email.value)
    console.log("Password: ", evt.target.password.value)
    let userObj = {
      email: evt.target.email.value,
      password: evt.target.password.value
    };
    let response = await login(userObj)
    handleLogin(response)
    return props.history.push('/')
  }

  return (
    <div>
    <h1 className='m-3'>Login</h1>
      <Form onSubmit={ getLoginInfo } className='m-5'>
        <Form.Group className='pt-3' controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" name='email' />
        </Form.Group>

        <Form.Group className='pt-3' controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" name='password' />
        </Form.Group>
        <Button size='lg' block variant="primary" className='mt-3' type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Login;
