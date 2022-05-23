import React from "react";

import LoginButton from "../../ui/button/LoginButton";
import styles from "../../assets/scss/memberlist.module.scss";

const ManagerList = () => {
  return (
      <div className={`${styles.tableContainer}`}>
        <div className="card shadow mb-4">
          <div className={styles.flexBlock}>
            <h2 style={{ fontSize: "18px" }}>Members List</h2>
            <div style={{ width: "200px" }}>
              <LoginButton btnClass="btn-danger" buttonText={"Add User"} />
            </div>
          </div>
          <div className="card-body px-5">
            <table className={`table table-bordered shadow-sm`}>
              <thead className={`table-light`}>
                <tr>
                  <th scope="col">Avatar</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Organisation</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Score</th>
                  <th scope="col">Birth Date</th>
                  <th scope="col">Managing</th>
                </tr>
              </thead>
              <tbody>
                <tr className={styles.tableRow}>
                  <th scope="row">1</th>
                  <td>Gustavus</td>
                  <td>Adolphus</td>
                  <td>Army</td>
                  <td>@gmail</td>
                  <td>+3806712494</td>
                  <td>25</td>
                  <td>24.05.1598</td>
                  <td className={styles.btnBlock}>
                    <LoginButton
                      className={styles.memberBtn}
                      buttonText={"Edit"}
                    >
                      Edit
                    </LoginButton>
                    <LoginButton
                      className={styles.memberBtn}
                      buttonText={"Delete"}
                    >
                      Delete
                    </LoginButton>
                  </td>
                </tr>
                {/* {Members} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default ManagerList;
