import React from 'react'


const MenuItem = ({menu}) => {


   return (
       <menu>
           <li>
               {menu.item1}
           </li>
           <li>
               {menu.item2}
           </li>
       </menu>
   )
}


const MenuList = ({menu}) => {

   return (
           menu.map((item) => <MenuItem menu={item} />)
   )
}

export default MenuList