import React ,{ useState } from "react";
import "./NewQuestionForm.css"
import { Header, Form } from "semantic-ui-react";

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
        Passing Grade:
        <Form.Input         
          type="Number"
          onChange={(e) => props.setPassingGrade(e.target.value)}
        />
      </Header>
      <Header textAlign="left">
        Answers:
        <Form.Input                 
          placeholder="Answer"
          onChange={(e) => props.setAnswers(e.target.value)}
        />
        <Form.Input                 
          placeholder="Answer"
          onChange={(e) => props.setAnswers(e.target.value)}
        />
        <Form.Input         
          placeholder="Answer"
          onChange={(e) => props.setAnswers(e.target.value)}
        />
        <Form.Input         
          placeholder="Answer"
          onChange={(e) => props.setAnswers(e.target.value)}
        />
      </Header>
    </Form>
/*     <div>
          <div>
            <label htmlFor="content">Content: </label>
            <input type="text"/>
          </div>
          <div>
            <label htmlFor="answers">Answers: </label>
            <div>
            <Checkbox></Checkbox>
              A<input type="text"/>
            </div>
            <div>
            <Checkbox></Checkbox>
              B<input type="text"/> 
            </div>
            <div>
            <Checkbox></Checkbox>
              C<input type="text"/> 
            </div>
            <div>
            <Checkbox></Checkbox>
              D<input type="text"/>                  
            </div>                
          </div>
           <div>
             <label htmlFor="tags">Tags: </label>
             <input type="text"/> 
           </div> 
           <button>Add question</button>    
      </div> */
    );
  };

export default NewQuestionForm;