import React from "react";

import styles from "../../assets/scss/memberlist.module.scss";
import { LoginButton } from "../../ui/button/LoginButton/LoginButton";

const ManagerManagment = () => {
  return (
    <div>
      <div className={`${styles.tableContainer}`}>
        <div className={styles.flexBlock}>
          <h2 style={{ fontSize: "18px" }}>Managers List</h2>
          <div style={{ width: "200px" }}>
            <LoginButton buttonText={"Add Manager"} />
          </div>
        </div>
        <table className={`table table-bordered`}>
          <thead className={`table-light ${styles.tableHead}`}>
            <tr>
              <th scope="col">Avatar</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Email</th>
              <th scope="col">Managment</th>
            </tr>
          </thead>
          <tbody>
            <tr className={styles.tableRow}>
              <th>Avatar</th>
              <td>Gustavus</td>
              <td>Adolphus</td>
              <td>@gmail</td>
              <td className={styles.btnBlock}>
                <LoginButton className={styles.memberBtn} buttonText={"Edit"}>
                  Edit
                </LoginButton>
                <LoginButton className={styles.memberBtn} buttonText={"Delete"}>
                  Delete
                </LoginButton>
              </td>
            </tr>
            {/* {Managers} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManagerManagment;
