import React, { useState, useEffect } from 'react';
import './NewQuestionForm.css';
import { Header, Form } from 'semantic-ui-react';
import Answer from '../Answer/Answer';

const NewQuestionForm = (props) => {
  const questionType = [
    {
      key: 'SingleChoiceQuestion',
      value: 'SingleChoiceQuestion',
      text: 'SingleChoiceQuestion'
    },
    {
      key: 'MultipleSelectionQuestion',
      value: 'MultipleSelectionQuestion',
      text: 'MultipleSelectionQuestion'
    }
  ];
  const viewAnswers = [
    { key: 'Horizontal', value: 'Horizontal', text: 'Horizontal' },
    { key: 'Vertical', value: 'Vertical', text: 'Vertical' }
  ];

  return (
    <Form>
      <Header textAlign="left">
        Question Type:
        <Form.Select
          error={props.questionTypeError}
          selection
          placeholder="Select a question Type"
          options={questionType}
          onChange={(e) => props.setQuestionType(e.target.innerText)}
        />
      </Header>
      <Header textAlign="left">
        Title:
        <Form.Input
          error={props.titleError}
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
          error={props.pointsError}
          type="Number"
          onChange={(e) => props.setPoints(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Tags:
        <Form.Input
          error={props.tagsError}
          type="Text"
          onChange={(e) => props.setTags(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Answers:
        <Answer
          error={props.answer1Error}
          setData={props.setAnswer1}
          data={props.answer1}
        />
        <Answer
          error={props.answer2Error}
          setData={props.setAnswer2}
          data={props.answer2}
        />
        <Answer
          error={props.answer3Error}
          setData={props.setAnswer3}
          data={props.answer3}
        />
        <Answer
          error={props.answer4Error}
          setData={props.setAnswer4}
          data={props.answer4}
        />
      </Header>
      <Header textAlign="left">
        viewAnswers:
        <Form.Select
          error={props.viewAnswersError}
          selection
          placeholder="Select a view answers"
          options={viewAnswers}
          onChange={(e) => props.setViewAnswers(e.target.innerText)}
        />
      </Header>
    </Form>
  );
};

export default NewQuestionForm;
