import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";
import styles from "../../assets/scss/sidebar.module.scss";
import {SmileIcon} from "../../assets/icons";

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
            <SmileIcon className={'text-white fs-1'} />
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
          <svg
            onClick={() => setIsSidebarBig(!isSidebarBig)}
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"
            />
          </svg>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
