import React from 'react'
import {Link} from 'react-router-dom'

const ProjectItem = ({project}) => {
   return (
       <tr>
           <td>
               <td><Link to={`projectdetail/${project.id}`}>{project.projectName}</Link></td>
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
const ProjectList = ({projects}) => {
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
           {projects.map((project) => <ProjectItem project={project} />)}
       </table>
   )
}


export default ProjectList

