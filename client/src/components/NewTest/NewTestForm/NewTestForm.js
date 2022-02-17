import { useState, useEffect } from 'react';
import { Header, Form } from 'semantic-ui-react';
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
          selection
          placeholder="Select a Field"
          options={fields}
          onChange={(e) => props.setField(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Language:
        <Form.Select
          selection
          placeholder="Select a Language"
          options={languageOptions}
          onChange={(e) => props.setLenguage(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Test Name:
        <Form.Input
          fluid
          placeholder="Test Name"
          onChange={(e) => props.setName(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Creater Email:
        <Form.Input
          fluid
          placeholder="Email"
          onChange={(e) => props.setEmail(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Passing Grade:
        <Form.Input
          fluid
          type="Number"
          onChange={(e) => props.setPassingGrade(e.target.value)}
        />
      </Header>
      <div className="wysiwyg-input">
        <Header textAlign="left" as="h2">
          Header
        </Header>
        <TextEditor
          editorState={props.header}
          setEditorState={props.setHeader}
        />
      </div>
      <div className="wysiwyg-input">
        <Header textAlign="left" as="h2">
          Message to show on success:
        </Header>
        <TextEditor
          editorState={props.successMsg}
          setEditorState={props.setSuccessMsg}
        />
      </div>
      <div className="wysiwyg-input">
        <Header textAlign="left" as="h2">
          Message to show on failure:
        </Header>
        <TextEditor
          editorState={props.failMsg}
          setEditorState={props.setFailMsg}
        />
      </div>
    </Form>
  );
};

export default NewTestForm;
