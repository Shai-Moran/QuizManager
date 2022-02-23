import React, { useEffect, useState } from 'react';
import { Container, Header, Select } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom';
import getFieldsService from '../../services/getFieldsService';

const TestFieldMenu = () => {
  const navigation = useNavigate();
  const [fields, setFields] = useState([]);

  useEffect(async () => {
    var fieldsData = await getFieldsService.getFields();
    fieldsData.data.map((f) => {
      setFields((prevState) => [
        ...prevState,
        { key: f.fieldName, value: f.fieldName, text: f.fieldName }
      ]);
    });
  }, []);

  const onSelectFieldHandler = (e) => {
    navigation(`/tests?field=${e.target.innerText}`);
  };

  return (
    <Container textAlign="left">
      <Header as="h1">Welcome to QuizManager!</Header>
      <Header as="h3">Please select the field of tests:</Header>
      <Select
        options={fields}
        selection
        placeholder="Select a Field"
        options={fields}
        onChange={onSelectFieldHandler}
      ></Select>
    </Container>
  );
};

export default TestFieldMenu;
