import React from 'react'

import styles from '../../assets/scss/memberlist.module.scss'
import Button from '../../ui/button/Button'

const ManagerManagement = () => {
  return (
    <div className={`${styles.tableContainer}`}>
      <div className="card shadow mb-4">
        <div className={`card-header py-3 ${styles.flexBlock}`}>
          <h2 className="m-0 font-weight-bold text-primary fs-5 text">Managers List</h2>
          <button style={{ fontSize: '18px' }} type="button" className="btn btn-primary w-auto">
            Add Manager
          </button>
        </div>
        <div className="card-body px-5">
          <table className={`table table-bordered shadow-sm`}>
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
                <div className={styles.btnBlock}>
                  <Button label={'Edit'} className={'btn-primary w-auto me-md-2'} />
                  <Button label={'Delete'} className={'btn-danger w-auto '} />
                </div>
              </tr>
              {/* {Managers} */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

<<<<<<< HEAD:src/pages/ManagerManagment/ManagerManagment.js
export default ManagerManagment
=======
export default ManagerManagement;
>>>>>>> main:src/pages/ManagerManagement/ManagerManagement.js
