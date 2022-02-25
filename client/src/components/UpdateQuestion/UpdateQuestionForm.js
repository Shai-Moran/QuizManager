import React, { useState, useEffect } from 'react';
import { Header, Form } from 'semantic-ui-react';
import Answer from '../Answer/Answer';

const UpdateQuestionForm = (props) => {
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
          value={props.questionType}
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
          value={props.title}
          error={props.titleError}
          placeholder="Title"
          onChange={(e) => props.setTitle(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Content:
        <Form.Input
          value={props.content}
          placeholder="Content"
          onChange={(e) => props.setContent(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Points:
        <Form.Input
          value={props.points}
          error={props.pointsError}
          type="Number"
          onChange={(e) => props.setPoints(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        <p>*In tags you have to write a word and at the end ',' click on the space and write the next word </p>
        Tags:
        <Form.Input
          value={props.tags}
          error={props.tagsError}
          type="Text"
          onChange={(e) => props.setTags(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Answers:
        <Answer
          value={props.answer1}
          error={props.answer1Error}
          setData={props.setAnswer1}
          data={props.answer1}
        />
        <Answer
          value={props.answer2}
          error={props.answer2Error}
          setData={props.setAnswer2}
          data={props.answer2}
        />
        <Answer
          value={props.answer3}
          error={props.answer3Error}
          setData={props.setAnswer3}
          data={props.answer3}
        />
        <Answer
          value={props.answer4}
          error={props.answer4Error}
          setData={props.setAnswer4}
          data={props.answer4}
        />
      </Header>
      <Header textAlign="left">
        viewAnswers:
        <Form.Select
          value={props.viewAnswers}
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

export default UpdateQuestionForm;
