import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users';
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";
import ProjectList from "./components/Projects";
import TodoList from "./components/Todo";
import {HashRouter, Route, BrowserRouter, Link, Switch, Redirect} from 'react-router-dom';
import UserProjectsList from "./components/UserProjectsList";
import ProjectDetail from "./components/ProjectDetail";
import LoginForm from './components/Auth.js';
import Cookies from 'universal-cookie';
import './bootstrap/css/bootstrap.min.css';
import './bootstrap/css/sticky-footer-navbar.css';
import ProjectForm from "./components/ProjectForm";
import TodoForm from "./components/TodoForm";

const NotFound404 = ({ location }) => {
  return (
    <div>
        <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}

class App extends React.Component {

   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'menu':[],
           'project':[],
           'todo':[],
           'footer':[],
           'token':[],
       }
   }
load_data(){
       const headers = this.get_headers()
       axios.get('http://127.0.0.1:8090/api/user/', {headers})
           .then(response => {
               const users = response.data.results
                   this.setState({
                       'users': users
                   })
               }
           ).catch(
               error => console.log(error)
       )

       axios.get('http://127.0.0.1:8090/api/project/', {headers})
           .then(response => {
               const project = response.data.results
                   this.setState({
                       'project': project
                   })
               }
           ).catch(
               error => console.log(error)
       )

       axios.get('http://127.0.0.1:8090/api/todo/', {headers})
           .then(response => {
               const todo = response.data.results
                   this.setState({
                       'todo': todo
                   })
               }
           ).catch(
               error => console.log(error)
       )
}
set_token(token) {
    const cookies = new Cookies()
    cookies.set('token', token)
    this.setState({'token': token}, ()=>this.load_data())
  }
  is_authenticated() {
    return !!this.state.token
  }

  logout() {
    this.set_token('')
  }

  get_token_from_storage() {
    const cookies = new Cookies()
    const token = cookies.get('token')
    this.setState({'token': token}, ()=>this.load_data())
  }
  get_token(username, password) {
    axios.post('http://127.0.0.1:8090/api-token-auth/', {username: username, password: password})
    .then(response => {
        this.set_token(response.data['token'])
    }).catch(error => alert('Неверный логин или пароль'))
  }
 get_headers() {
    let headers = {
      'Content-Type': 'application/json'
    }
  if (this.is_authenticated())
    {
        headers['Authorization'] = 'Token ' + this.state.token
    }
    return headers
  }
  deleteProject(id) {
    const headers = this.get_headers()
    axios.delete(`http://127.0.0.1:8090/api/project/${id}`, {headers})
        .then(response => {
          this.setState({project: this.state.project.filter((item)=>item.id !== id)})
        }).catch(error => console.log(error))
  }
    deleteTodo(id) {
    const headers = this.get_headers()
    axios.delete(`http://127.0.0.1:8090/api/todo/${id}`, {headers})
        .then(response => {
          this.setState({todo: this.state.todo.filter((item)=>item.id !== id)})
        }).catch(error => console.log(error))
  }

  createProject(projectName, projectAuthor, projectLink) {
    const headers = this.get_headers()
    const data = {projectName: projectName, projectAuthor: projectAuthor, projectLink: projectLink}
    axios.post(`http://127.0.0.1:8090/api/project/`, data, {headers})
        .then(response => {
          let new_project = response.data
          const project = this.state.project.filter((item) => item.id === new_project.project)[0]
          new_project.project = project
          this.setState({project: [...this.state.project, new_project]})
        }).catch(error => console.log(error))
  }

  createTodo(text, author) {
    const headers = this.get_headers()
    const data = {text: text, author: author}
    axios.post(`http://127.0.0.1:8090/api/todo/`, data, {headers})
        .then(response => {
          let new_todo = response.data
          const todo = this.state.project.filter((item) => item.id === new_todo.todo)[0]
          new_todo.project = todo
          this.setState({todo: [...this.state.todo, new_todo]})
        }).catch(error => console.log(error))
  }
componentDidMount() {
        this.get_token_from_storage()
   }
   render () {
       return (
           <div>
               <MenuList menu={this.state.menu} />
               <HashRouter>
                   <header>
                    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                        <a className="navbar-brand" href="#">DRF</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/'>Users</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/project'>Project</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/todo'>Todo</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/project/create'>Create Project</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to='/todo/create'>Create Todo</Link>
                                </li>
                                <li className="nav-item active">
                                    {this.is_authenticated() ?
                                        <button className="nav-link" onClick={() => this.logout()}>Logout</button> :
                                        <Link className="nav-link" to='/login'>Login</Link> }
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>
                   <main role="main" className="flex-shrink-0">
                       <div className="container">
                           <Switch>
                                <Route exact path='/' component={() => <UserList users={this.state.users} />}  />
                                <Route exact path="/project/create" component={() =>
                                    <ProjectForm
                                        projects={this.state.project}
                                        createProject={(projectName, projectAuthor, projectLink) =>
                                            this.createProject(projectName, projectAuthor, projectLink)}/>}  />

                                <Route exact path='/project' component={() => <ProjectList projects={this.state.project}
                                                           deleteProject={(id)=>this.deleteProject(id)} />} />
                                <Route exact path='/project' component={() => <ProjectList projects={this.state.project} />} />
                                <Route exact path='/todo/create' component={() =>
                                    <TodoForm
                                        todoes={this.state.todo}
                                        createTodo={(text, todoes) =>
                                            this.createTodo(text, todoes)}/>}  />

                                <Route exact path='/todo' component={() => <TodoList todoes={this.state.todo}
                                                           deleteTodo={(id)=>this.deleteTodo(id)} />} />
                                <Route exact path='/todo' component={() => <TodoList todoes={this.state.todo} />} />
                                <Route exact path='/login' component={() =>
                                    <LoginForm
                                        get_token={(username, password) => this.get_token(username, password)}
                                    />} />
                                <Route path="/user/:id"><UserProjectsList projects={this.state.project} /></Route>
                                <Route path="/projectdetail/:id"><ProjectDetail projects={this.state.project} /></Route>

                                <Redirect from='/users' to='/' />
                                <Route component={NotFound404} />
                            </Switch>
                       </div>
                </main>
                </HashRouter>
               <FooterList footer={this.state.footer} />
           </div>
       )
   }
}


export default App;
