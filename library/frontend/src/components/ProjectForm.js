import React from 'react'

class ProjectForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          projectName: '',
          projectAuthor: [],
          projectLink: '',
          // projectAuthor: props.projects[0].id
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
        this.props.createProject(this.state.projectName, this.state.projectAuthor, this.state.projectLink)
        event.preventDefault()
    }
    render() {
      return (
        <form onSubmit={ this.handleSubmit}>
            <div className="form-group">
            <label for="login">projectName</label>
                <input type="text" className="form-control" name="projectName" value={this.state.projectName} onChange={(event)=>this.handleChange(event)} />
            </div>
            <div className="form-group">
                <label for="login">projectAuthor</label>
                <select multiple name="projectAuthor" onChange={(event)=>this.handleChange(event)} >
                            {this.props.projects.map((item) => <option value={item.id}>{item.projectAuthor[0].username}</option>)}
                </select>
            </div>
            <div className="form-group">
                <label for="projectLink">projectLink</label>
                <input type="text" className="form-control" name="projectLink" value={this.state.projectLink} onChange={(event)=>this.handleChange(event)} />
            </div>
          <input type="submit" className="btn btn-primary" value="Save" />
        </form>
      );
    }
  }
  export default ProjectForm