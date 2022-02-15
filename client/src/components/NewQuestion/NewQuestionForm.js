import React ,{ useState } from "react";
import Checkbox from "antd/lib/checkbox/Checkbox";
import "./NewQuestionForm.scss"

const NewQuestionForm = () => {

  return (
    <div>
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
      </div>
    );
  };

export default NewQuestionForm;