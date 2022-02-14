import { Component } from "react";

// jsx class component
class QuestionsForm extends Component {
  state = { title: "", content: "", errors: {} };

  handleChangeTitle = (e) => {
    this.setState({ title: e.currentTarget.value, errors: {} });
  };

  handleChangeContent = (e) => {
    this.setState({ content: e.currentTarget.value, errors: {} })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = this.validate();
    this.setState({ errors: errors || {} });
    if (errors) return;

    const questionToAdd = { Title: this.state.title , Content: this.state.content};
    this.props.onAddQuestion(questionToAdd);
    this.setState({ title: "", content: "" });
  };

  validate = () => {
    const errors = {};
    if (this.state.title.trim() === "" && this.state.content.trim() === "") errors.title = "Title is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  render() {
    const { content ,title, errors } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <div className="form-group space">
          <ui htmlFor="type">Type: </ui>
            <select>
              <option>SingleChoiceQuestion</option>
              <option>MultipleSelectionQuestion</option>
            </select>
          </div>
          <div className="form-group space">
            <label htmlFor="title">Title: </label>
            <input
              value={title}
              onChange={this.handleChangeTitle}
              id="title"
              type="text"
              className="input form-control"
            />
            {errors.title && (
              <div className="alert alert-danger">{errors.title}</div>
            )}
          </div>
          <div className="form-group space">
            <label htmlFor="content">Content: </label>
            <input
              value={content}
              onChange={this.handleChangeContent}
              id="content"
              type="text"
              className="input form-control"
            />
          </div>
          <div className="form-group space"> 
            
          </div>
          <button className="btn btn-primary btn-sm">Add question</button>
        </form>
      </div>
    );
  }
}

export default QuestionsForm;
