import React from 'react'

class TodoForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          text: '',
          authors: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event)
    {
        this.setState({
                [event.target.name]: event.target.value,
            });
    }

    handleSubmit(event) {
        this.props.createTodo(this.state.text, this.state.author)
        event.preventDefault()
    }
    render() {
      return (
        <form onSubmit={ this.handleSubmit}>
            <div className="form-group">
            <label for="login">Todo</label>
                <input type="text" className="form-control" name="text" value={this.state.text} onChange={(event)=>this.handleChange(event)} />
            </div>
            <div className="form-group">
                <label for="login">Author</label>
                <select multiple name="authors" onChange={(event)=>this.handleChange(event)} >
                            {this.props.todoes.map((authors) => <option value={authors.id}> {authors.author}</option>)}
                </select>
            </div>
          <input type="submit" className="btn btn-primary" value="Save" />
        </form>
      );
    }
  }
  export default TodoForm