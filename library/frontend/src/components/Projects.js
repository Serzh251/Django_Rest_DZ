import React from 'react'
import {Link} from 'react-router-dom'

const ProjectItem = ({project, deleteProject}) => {

   return (
           <tr>
               <td>
                   <td><Link to={`projectdetail/${project.id}`}>{project.projectName}</Link></td>
               </td>
               <td>
                   {project.projectLink}
               </td>
               <td>
                   {/*{project.projectAuthor[0].username}*/}
               </td>
               <td><button onClick={()=>deleteProject(project.id)} type='button'>Delete</button></td>
           </tr>
   )
}
const ProjectList = ({projects, deleteProject}) => {
   return (
       <div>
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
               <td></td>
               {projects.map((project) => <ProjectItem project={project} deleteProject={deleteProject} />)}
           </table>
           <Link to='/project/create'>Create</Link>
       </div>
   )
}


export default ProjectList

