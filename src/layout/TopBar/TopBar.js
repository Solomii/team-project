import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import {getAuth, onAuthStateChanged} from 'firebase/auth';
// import { signOut } from 'firebase/auth'; 
// import {useNavigate} from 'react-router-dom';

import avatar from './images/avatar.svg';
import profile from './images/profile.svg';
import logout from './images/logout.svg';

import styles from './topbar.module.scss';

// const auth = getAuth();

function TopBar() {
    // const navigate = useNavigate();
    const AuthHeader = 'div';
    const DropDownListContainer ='div';
    const DropDownList = 'div';

    const [isOpen, setIsOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    // useEffect(() => {
    //     onAuthStateChanged(auth, (user) => {
    //       setCurrentUser(user)
    //     })
    //   }, [])
    
    const toggle = () => setIsOpen(!isOpen);

    // const signIn = () => {
    //     navigate('/');
    // }
    
    // const signout = () => {
    //     signOut(auth);
    //     navigate('/');
    // }

    // const goToProfile = () => {
    //     navigate('/');
    // }
           
    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarAuth}>
                {isOpen && (
                    <AuthHeader className={styles.authHeader} onClick={toggle}>
                        <div>
                            <span className={styles.email}>email.address@email.com</span>
                            <img className={styles.avatar} src={avatar} alt='avatar'/>
                        </div>
                    </AuthHeader>
                )}
                {!isOpen && (
                    <AuthHeader className={styles.authHeader} onClick={toggle}>
                        <span className={styles.signIn}>Sign In</span>
                    </AuthHeader>
                )}

                {/* {currentUser && (
                    <AuthHeader className={styles.authHeader} onClick={toggle}>
                        <div>
                            <span className={styles.email}>`${currentUser.email}`</span>
                            <img className={styles.avatar} src={avatar} alt='avatar'/>
                        </div>
                    </AuthHeader>
                )}
                {!currentUser && (
                    <AuthHeader className={styles.authHeader} onClick={signIn}>
                        <span className={styles.signIn}>Sign In</span>
                    </AuthHeader>
                )} */}
                     
                
                {isOpen && (
                    <DropDownList className={styles.dropdownList} >
                        <div className={styles.dropdownItem} onClick={toggle} >
                            <img className={styles.imgProfile} src={profile} alt='profile' />
                            Profile
                        </div>
                        <div className={styles.dropdownDivider}></div>
                        <div className={styles.dropdownItem} onClick={toggle}>
                            <img className={styles.imgProfile} src={logout} alt='logout' />
                            Sign Out 
                        </div>
                    </DropDownList>
                )}

                {/* {isOpen && (
                    <DropDownList className={styles.dropdownList} >
                        <div className={styles.dropdownItem} onClick={goToProfile}>
                            <img className={styles.imgProfile} src={profile} alt='profile' />
                            Profile
                        </div>
                        <div className={styles.dropdownDivider}></div>
                        <div className={styles.dropdownItem} onClick={toggle}>
                            <img className={styles.imgProfile} src={logout} alt='logout' />
                            Sign Out 
                        </div>
                    </DropDownList>
                )} */}

            </div>
        </nav>
    );
}
  
export default TopBar;