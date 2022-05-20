import React, { useState } from "react";
import { Link } from "react-router-dom";

import { SidebarData } from "./SidebarData";
import styles from "./Sidebar.module.scss";

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
      <div className={sidebarClasses}>
        <div className={styles.roleBlock}>
          {isSidebarBig && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z" />
            </svg>
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
      </div>
    </>
  );
};

export default Sidebar;
