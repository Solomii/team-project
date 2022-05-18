import React from 'react'
import { SidebarData } from './SidebarData'
import styles from './Sidebar.module.scss'

const Sidebar = () => {
  return (
    <ul className={styles.sidebar}>
        {SidebarData.map((el, key) => (
            <li className={styles.sidebarLi} key={key}>
                <div>{el.icon}</div>{el.title}
            </li>
            
        ))}
    </ul>

  )
}


export default Sidebar