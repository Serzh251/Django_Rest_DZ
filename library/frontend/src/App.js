import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import UserList from './components/Users'
import MenuList from "./components/Menu";
import FooterList from "./components/Footer";

class App extends React.Component {

   constructor(props) {
       super(props)
       this.state = {
           'users': [],
           'menu':[],
           'footer':[]
       }
   }

   componentDidMount() {
       axios.get('http://127.0.0.1:8090/api/users/')
           .then(response => {
               const users = response.data
                   this.setState({
                       'users': users
                   })
               }
           ).catch(
               error => console.log(error)
       )

       axios.get('http://127.0.0.1:8090/api/menu/')
           .then(response => {
               const menu = response.data
                   this.setState({
                       'menu': menu
                   })
               }
           ).catch(
               error => console.log(error)
       )

       axios.get('http://127.0.0.1:8090/api/footer/')
           .then(response => {
               const footer = response.data
                   this.setState({
                       'footer': footer
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
               <UserList users={this.state.users} />
               <FooterList footer={this.state.footer} />
           </div>
       )
   }
}


export default App;
