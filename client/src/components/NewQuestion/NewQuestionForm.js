import React, {useState} from 'react';
import "./NewQuestionForm.scss"

const NewQuestionForm = () => {
    const [isCorrect, setSelection] = useState(false);

    return (
        <div>
            <div >
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
                <label htmlFor="content">Answers: </label>
                <div>
                <input type="checkbox" value={isCorrect} onValueChange={setSelection} />
                  A<input type="text"/> 
                </div>
                <div>
                <input type="checkbox"/>
                  B<input type="text"/> 
                </div>
                <div>
                <input type="checkbox"/>
                  C<input type="text"/> 
                </div>
                <div>
                <input type="checkbox"/>
                  D<input type="text"/>                  
                </div>                
              </div>     
          </div>
    );
};

export default NewQuestionForm;