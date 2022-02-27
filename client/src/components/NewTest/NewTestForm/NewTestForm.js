import { useState, useEffect } from 'react';
import { Header, Form, Radio, Container, Segment } from 'semantic-ui-react';
import TextEditor from '../../UI/TextEditor/TextEditor';
import getFieldsService from '../../../services/getFieldsService';

const NewTestForm = (props) => {
  const [fields, setFields] = useState([]);
  const languageOptions = [
    { key: 'hebrew', value: 'hebrew', text: 'Hebrew' },
    { key: 'english', value: 'english', text: 'English' }
  ];

  useEffect(async () => {
    var fieldsData = await getFieldsService.getFields();
    fieldsData.data.map((f) => {
      setFields((prevState) => [
        ...prevState,
        { key: f.fieldName, value: f.fieldName, text: f.fieldName }
      ]);
    });
  }, []);

  return (
    <Form>
      <Header textAlign="left">
        Field:
        <Form.Select
          error={props.fieldError}
          selection
          placeholder="Select a Field"
          options={fields}
          onChange={(e) => props.setField(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Answer Review:
        <Container>
          <Radio
            toggle
            onChange={() => props.setAnswerReview(!props.answerReview)}
          />
        </Container>
      </Header>
      <Header textAlign="left">
        Language:
        <Form.Select
          error={props.languageError}
          selection
          placeholder="Select a Language"
          options={languageOptions}
          onChange={(e) => props.setLenguage(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Test Name:
        <Form.Input
          error={props.nameError}
          fluid
          placeholder="Test Name"
          onChange={(e) => props.setName(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Creater Email:
        <Form.Input
          error={props.emailError}
          fluid
          placeholder="Email"
          onChange={(e) => props.setEmail(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Passing Grade:
        <Form.Input
          error={props.passingGradeError}
          fluid
          type="Number"
          onChange={(e) => props.setPassingGrade(e.target.value)}
        />
      </Header>
      <div className="wysiwyg-input">
        <Segment>
          <Header textAlign="left" as="h2">
            Header
          </Header>
          <TextEditor
            editorState={props.header}
            setEditorState={props.setHeader}
          />
        </Segment>
      </div>
      <div className="wysiwyg-input">
        <Segment>
          <Header textAlign="left" as="h2">
            Message to show on success:
          </Header>
          <TextEditor
            editorState={props.successMsg}
            setEditorState={props.setSuccessMsg}
          />
        </Segment>
      </div>
      <div className="wysiwyg-input">
        <Segment>
          <Header textAlign="left" as="h2">
            Message to show on failure:
          </Header>
          <TextEditor
            editorState={props.failMsg}
            setEditorState={props.setFailMsg}
          />
        </Segment>
      </div>
    </Form>
  );
};

export default NewTestForm;
