

import { NavLink } from 'react-router-dom'
import { SideBarList, SideBarLink } from './StyledComponents'
import './sidebar.css'


function Sidebar() {

  const links = [

    { title: 'Home', href: '/' },
    { title: 'Basic Details', href: '/details' },
    { title: 'Marks Sheet', href: '/marks' },
    { title: 'Payments', href: '/payments' },
    { title: 'Contact', href: '/contact' },
  ]


  return (
    <SideBarList>
      {
        links.map((link) => {
          return <SideBarLink  >
            <NavLink className={({ isActive }) => {
              return 'side-link ' + (isActive ? 'nav-link' : '')
            }} to={link.href}>{link.title}</NavLink>
          </SideBarLink>
        })
      }
    </SideBarList >
  )
}

export default Sidebar
