import React from 'react'
import { useParams } from 'react-router-dom'

const ProjectItem = ({project}) => {
   return (
       <tr>
           <td>
               {project.projectName}
           </td>
           <td>
               {project.projectLink}
           </td>
           <td>
               {project.projectAuthor[0].username}
           </td>
       </tr>
   )
}
const UserProjectsList = ({projects}) => {
    let { id } = useParams();
    let filtered_items = projects.filter((item) => item.id == id)

       return (
           <table>
               <th>
                   Project Name
               </th>
               <th>
                   Project Link
               </th>
               <th>
                   Project Author
               </th>
               {filtered_items.map((project) => <ProjectItem project={project} />)}
           </table>
       )
}


export default UserProjectsList

