import React from "react";

import styles from "../../assets/scss/memberlist.module.scss";
// import Members from "../../features/Members";

const MemberList = () => {
  return (
    <div className={`${styles.tableContainer}`}>
      <div className={styles.flexBlock}>
        <h2 style={{ fontSize: "18px" }}>Members List</h2>
        <div style={{ width: "200px" }}>
        </div>
      </div>
      <table className={`table table-bordered shadow`}>
        <thead className={`table-light ${styles.tableHead}`}>
          <tr>
            <th scope="col">Avatar</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Organisation</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Gustavus</td>
            <td>Adolphus</td>
            <td>Army</td>
            <td>+3806712494</td>
          </tr>
          {/* {Members} */}
        </tbody>
      </table>
    </div>
  );
};

export default MemberList;
