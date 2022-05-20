import React from 'react';

import styles from './changedPassword.module.scss';

function ChangedPassword () {
    
    return (
        <div className={styles.container}>
            <div className={styles.messageBox}>
                <p> Password changed </p>
                <p> Now you can sign in with your new password </p>
            </div>
        </div>
    )
}

export default ChangedPassword;