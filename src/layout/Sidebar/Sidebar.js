import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";
import styles from "../../assets/scss/sidebar.module.scss";
import  { SmileSvg, ArrowSvg } from "../../assets/svg/svg-icons";

const Sidebar = () => {
  const [isSidebarBig, setIsSidebarBig] = useState(true);
  const sidebarClasses = isSidebarBig
    ? styles.sidebar
    : `${styles.sidebar} ${styles.sidebarActive}`;
  const sidebarArrowClasses = isSidebarBig
    ? styles.sidebarArrow
    : `${styles.sidebarArrow} ${styles.sidebarArrowActive}`;
  const sidebarLiClasses = isSidebarBig
    ? styles.sidebarLi
    : `${styles.sidebarLi} ${styles.sidebarLiActive}`;
  const sidebarIconLiClasses = isSidebarBig
    ? styles.iconLi
    : `${styles.iconLi} ${styles.iconLiActive}`;

  return (
    <>
      <nav className={sidebarClasses}>
        <div className={styles.roleBlock}>
          {isSidebarBig && (
            <SmileSvg />
          )}
          <h2 className={styles.roleText}>Role:</h2>
        </div>
        <hr className={styles.horizonLine} />
        <ul style={{ paddingLeft: "0px" }}>
          {SidebarData.map((el, key) => (
            <Link key={key} className={styles.Link} to={el.link}>
              <li className={sidebarLiClasses}>
                <div className={sidebarIconLiClasses}>{el.icon}</div>
                <div>{el.title}</div>
              </li>
            </Link>
          ))}
        </ul>
        <hr className={styles.horizonLine} />
        <div className={sidebarArrowClasses}>
          <ArrowSvg onClick={() => setIsSidebarBig(!isSidebarBig)} />
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
