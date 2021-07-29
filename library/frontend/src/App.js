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
           'footer':[]
       }
   }

   componentDidMount() {
       axios.get('http://127.0.0.1:8090/api/users/')
           .then(response => {
               const users = response.data.results
                   this.setState({
                       'users': users
                   })
               }
           ).catch(
               error => console.log(error)
       )

       axios.get('http://127.0.0.1:8090/api/project/')
           .then(response => {
               const project = response.data.results
                   this.setState({
                       'project': project
                   })
               }
           ).catch(
               error => console.log(error)
       )

       axios.get('http://127.0.0.1:8090/api/todo/')
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
                       </ul>
                   </nav>
                   <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users} />}  />
                        <Route exact path='/project' component={() => <ProjectList projects={this.state.project} />} />
                        <Route exact path='/todo' component={() => <TodoList todoes={this.state.todo} />} />
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
