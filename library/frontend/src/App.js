import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users'
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";
import ProjectList from "./components/Projects";
import TodoList from "./components/Todo";
import {HashRouter, Route, BrowserRouter, Link, Switch, Redirect} from 'react-router-dom'
import UserProjectsList from "./components/UserProjectsList";
import ProjectDetail from "./components/ProjectDetail";
import LoginForm from './components/Auth.js'
import Cookies from 'universal-cookie';

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
       axios.get('http://127.0.0.1:8090/api/users/', {headers})
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

componentDidMount() {
        this.get_token_from_storage()
   }
   render () {
       return (
           <div>
               <MenuList menu={this.state.menu} />
               <BrowserRouter>
                   <nav>
                       <ul>
                           <li>
                               <Link to='/'>Users</Link>
                           </li>
                           <li>
                               <Link to='/project'>Project</Link>
                           </li>
                           <li>
                               <Link to='/todo'>Todo</Link>
                           </li>
                           <li>
                               {this.is_authenticated() ? <button onClick={()=>this.logout()}>Logout</button> : <Link to='/login'>Login</Link>}
                           </li>
                       </ul>
                   </nav>
                   <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users} />}  />
                        <Route exact path='/project' component={() => <ProjectList projects={this.state.project} />} />
                        <Route exact path='/todo' component={() => <TodoList todoes={this.state.todo} />} />
                        <Route exact path='/login' component={() => <LoginForm get_token={(username, password) => this.get_token(username, password)} />} />
                        <Route path="/user/:id"><UserProjectsList projects={this.state.project} /></Route>
                        <Route path="/projectdetail/:id"><ProjectDetail projects={this.state.project} /></Route>

                        <Redirect from='/users' to='/' />
                        <Route component={NotFound404} />
                    </Switch>
                </BrowserRouter>
               <FooterList footer={this.state.footer} />
           </div>
       )
   }
}


export default App;
