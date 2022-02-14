import React, { Component } from "react";
import QuestionService from "../services/questionService";
import "./createQuestion.scss";

class CreateQuestion extends Component {
    state = {
        questions: [],
      };

      async componentDidMount() {
        this.getQuestions();
      }
    
      async getQuestions() {
        const { data: questions } = await QuestionService.getAllQuestions();
        this.setState({ questions });
      }
    
      addQuestion = async (question) => {
        const addedQuestion = await QuestionService.addQuestion(question);
        this.setState({ questions: [...this.state.questions, addedQuestion.data] });
      };

      deleteQuestion = async (question) => {
        const deletedQuestion = await QuestionService.deleteQuestion(question);
        this.setState({ questions: [...this.state.questions, deletedQuestion.data] });
      };

      render() {
        return (
          <div className="editor">
              <h1>Edit Question</h1>
              <h2>Question</h2>
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
                  A<input type="text"/> 
                </div>
                <div>
                  B<input type="text"/> 
                </div>
                <div>
                  C<input type="text"/> 
                </div>
                <div>
                  D<input type="text"/> 
                </div>
              </div>     
          </div>
        );
      }
    }

    export default CreateQuestion