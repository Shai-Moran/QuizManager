import React ,{ useState, useEffect } from "react";
import "./NewQuestionForm.css"
import { Header, Form } from "semantic-ui-react";
import Answer from "../Answer/Answer";

const NewQuestionForm = (props) => {
 
  const questionType = [
    { key: 'SingleChoiceQuestion', value: 'SingleChoiceQuestion', text: 'SingleChoiceQuestion' },
    { key: 'MultipleSelectionQuestion', value: 'MultipleSelectionQuestion', text: 'MultipleSelectionQuestion' }
  ];
  
  return (
    <Form>
      <Header textAlign="left">
        Question Type:
        <Form.Select
          selection
          placeholder="Select a question Type"
          options={questionType}
          onChange={(e) => props.setQuestionType(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Title:
        <Form.Input
          fluid
          placeholder="Title"
          onChange={(e) => props.setTitle(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Content:
        <Form.Input      
          placeholder="Content"
          onChange={(e) => props.setContent(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Points:
        <Form.Input         
          type="Number"
          onChange={(e) => props.setPoints(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Answers:
        <Answer
          setData = {props.setAnswer1}
          data = {props.answer1}
          />
          <Answer
          setData = {props.setAnswer2}
          data = {props.answer2}
          />
          <Answer
          setData = {props.setAnswer3}
          data = {props.answer3}
          />
          <Answer
          setData = {props.setAnswer4}
          data = {props.answer4}
          />
      </Header>
    </Form>
    );
  };

export default NewQuestionForm;