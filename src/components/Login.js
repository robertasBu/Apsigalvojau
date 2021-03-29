import React, { useState } from "react";
//import { Button } from './Button';
import "./Login.css";
import { Button, Checkbox, Form } from 'semantic-ui-react';

const Login = () => (
  <Form style={{maxWidth:"280px", 
  margin: "20px", 
  justifyContent: "center",
  alignItems: "center"}}>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <Checkbox label='I agree to the Terms and Conditions' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
)

export default Login;