import React, { useState } from 'react';
import { Button, Form, Header } from 'semantic-ui-react';

const TestUserForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [id, setId] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [idError, setIdError] = useState(false);

  const submitHandler = () => {
    if (firstName === '') setFirstNameError(true);
    else if (lastName === '') setLastNameError(true);
    else if (email === '') setEmailError(true);
    else if (id === '') setIdError(true);
    else {
      const newUser = {
        id: id,
        firstName: firstName,
        lastName: lastName,
        email: email,
        userType: 'student'
      };

      
    }
  };

  return (
    <Form>
      <Header as="h1">Welcome to QuizManager!</Header>
      <Header as="h3">Please enter your details:</Header>
      <Form.Input
        error={firstNameError}
        label="First Name:"
        onChange={(e) => {
          setFirstName(e.target.value);
        }}
      />
      <Form.Input
        error={lastNameError}
        label="Last Name:"
        onChange={(e) => {
          setLastName(e.target.value);
        }}
      />
      <Form.Input
        error={emailError}
        label="Email:"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <Form.Input
        error={idError}
        label="Id:"
        onChange={(e) => {
          setId(e.target.value);
        }}
      />
      <Button color="green" onClick={submitHandler}>
        Submit
      </Button>
    </Form>
  );
};

export default TestUserForm;
