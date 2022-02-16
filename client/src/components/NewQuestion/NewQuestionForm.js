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
        Language:
        <Form.Select
          selection
          placeholder="Select a question Type"
          options={questionType}
          onChange={(e) => props.setQuestionType(e.target.innerText)}
        />
      </Header>
    </Form>
/*     <div>
        <div>
            <label htmlFor="type">Type: </label>
              <select>
                <option>SingleChoiceQuestion</option>
                <option>MultipleSelectionQuestion</option>
              </select>
            </div>
          <div>
            <label htmlFor="title">Title: </label>
            <input type="text"/>
          </div>
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