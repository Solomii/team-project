import React, { useState } from "react";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';
import AddMemberForm from "../../features/AddMemberForm";
import { auth } from "../../firebase-client";

import styles from "../../assets/scss/membermanagement.module.scss";

const MemberManagement = () => {
  // const auth = getAuth();
  const [show, setShow] = useState(false);
  console.log(auth)

  return (
      <div className={`${styles.tableContainer}`}>
        <div className="card shadow mb-4">
          <div className={`card-header py-3 ${styles.flexBlock}`}>
            <h2 className="m-0 font-weight-bold text-primary fs-5 text">Members List</h2>
            <button style={{fontSize: "18px"}} type="button" className="btn btn-primary w-auto" onClick={() => setShow(!show)}>
              Add Member
            </button>
          </div>
          <div>
            { show ? <AddMemberForm closeForm={() => setShow(false)}/> : null}
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
                  <div className={styles.btnBlock}>
                    <button type="button" className="btn btn-primary w-auto">Edit</button>
                    <button type="button" className="btn btn-danger w-auto">Delete</button>
                  </div>
                </tr>
                {/* {Members} */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
  );
};

export default MemberManagement;
