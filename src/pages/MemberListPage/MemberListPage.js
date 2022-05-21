import React from "react";

import styles from "./MemberListPage.module.scss";

const MemberListPage = () => {
  return (
    <>
      <table className={`table table-bordered ${styles.tableContainer}`}>
        <thead className={styles.tableHead}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th className={styles.rd} scope="col">Handle</th>
          </tr>
        </thead>
        <tbody>
        <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tbody>
      </table>
    </>
  );
};

export default MemberListPage;
