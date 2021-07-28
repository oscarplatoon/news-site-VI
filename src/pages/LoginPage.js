import React, { Component } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import UserAPI from '../api/UsersAPI'

class LoginPage extends Component {


  handleFormSubmit = async (event) => {
    event.preventDefault();

    console.log('EMAIL:', event.target.email.value)
    console.log('PASSWORD:', event.target.password.value)

    let userObj = {
      email: event.target.email.value,
      password: event.target.password.value
    }
    let response = await UserAPI.login(userObj)
    this.props.handleLogin(response)
    return this.props.history.push('/')
  };
  render() {
    return (
      <div style={{padding: '20px'}}>
        <h3> Login </h3>
        <Form onSubmit={this.handleFormSubmit}>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    )}
}

export default LoginPage;


// Functional solution:
// function LoginPage() {
//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log(event.target.elements[0].value);
//     console.log(event.target.elements[1].value);
//   };

//   return (
//     <div style={{ padding: '20px' }}>
//       <h3> Login </h3>
//       <Form onSubmit={handleFormSubmit}>
//         <FormGroup>
//           <Label for="email">Email</Label>
//           <Input type="email" name="email" id="email" />
//         </FormGroup>
//         <FormGroup>
//           <Label for="password">Password</Label>
//           <Input type="password" name="password" id="password" />
//         </FormGroup>
//         <Button>Submit</Button>
//       </Form>
//     </div>
//   )
// };
