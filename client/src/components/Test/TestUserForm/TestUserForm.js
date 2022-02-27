import React, { useState } from 'react';
import { Button, Form, Header, Segment } from 'semantic-ui-react';
import newUserService from '../../../services/newUserService';
import { v4 as uuid4 } from 'uuid';
import getUserById from '../../../services/getUserById';

const TestUserForm = (props) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  const submitHandler = () => {
    if (firstName === '') setFirstNameError(true);
    else if (lastName === '') setLastNameError(true);
    else if (email === '') setEmailError(true);
    else if (phoneNumber === '') setPhoneNumberError(true);
    else {
      const newUser = {
        id: uuid4(),
        firstName: firstName,
        lastName: lastName,
        email: email,
        phoneNumber: phoneNumber,
        userType: 'student'
      };
      newUserService.addUser(newUser);
      props.setUserId(newUser.id);
      props.setTestStage(1);
    }
  };

  return (
    <Segment>
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
          error={phoneNumberError}
          label="Phone Number:"
          onChange={(e) => {
            setPhoneNumber(e.target.value);
          }}
        />
        <Button color="green" onClick={submitHandler}>
          Submit
        </Button>
      </Form>
    </Segment>
  );
};

export default TestUserForm;
