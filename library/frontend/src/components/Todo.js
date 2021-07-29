import React from 'react'

const TodoItem = ({todo}) => {
    // console.log(todo.isActive)
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
       </tr>
   )
}
const TodoList = ({todoes}) => {

   return (
       <table>
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
           {todoes.map((todo) => <TodoItem todo={todo} />)}
       </table>
   )
}


export default TodoList

