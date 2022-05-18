import React from 'react'
import { SidebarData } from './SidebarData'

const Sidebar = () => {
  return (
    <ul class="sidebar">
        {SidebarData.map((el, key) => (
            <li key={key}>{el.title}</li>
        ))}
    </ul>

  )
}


export default Sidebar