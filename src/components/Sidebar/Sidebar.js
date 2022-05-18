import React from 'react'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
  return (
    <ul className="sidebar">
        {SidebarData.map((el, key) => (
            <li key={key}>
                {el.title}
                <div>{el.icon}</div>
                <i className="bi bi-calendar-event">dsad</i>
            </li>
            
        ))}
    </ul>

  )
}


export default Sidebar