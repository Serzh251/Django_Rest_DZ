import React from 'react'
import {Link} from "react-router-dom";

const TodoItem = ({todo, deleteTodo}) => {
    console.log(todo)
   return (
       <tr>
           <td>
               {todo.text}
           </td>
           <td>
               {todo.updateDatatime}
           </td>
           <td>
               {todo.addDatatime}
           </td>
           <td>
               {todo.isActive}
           </td>
           <td>
               {/*<Link to={`users/${todo.id}`}>{todo.id}</Link>*/}
               {todo.author}

           </td>
           <td><button onClick={()=>deleteTodo(todo.id)} type='button'>Delete</button></td>
       </tr>
   )
}
const TodoList = ({todoes, deleteTodo}) => {

   return (
       <table>
           <tr>
               <th>
                   Text
               </th>
               <th>
                   updateDatatime
               </th>
               <th>
                   addDatatime
               </th>
               <th>
                   isActive
               </th>
               <th>
                   author
                   {/* {filtered_items.map((item) => <TodoItem item={item} />)}*/}
               </th>
               <th></th>
           </tr>
           {todoes.map((todo) => <TodoItem todo={todo} deleteTodo={deleteTodo} />)}
       </table>
           // <Link to='todo/create'>Create</Link>
   )
}


export default TodoList

