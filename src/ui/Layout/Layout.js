import {Outlet} from "react-router-dom";

import Sidebar from "../../layout/Sidebar";
import Topbar from "../../layout/Topbar";

import styles from '../../assets/scss/layout.module.scss';

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <main className={styles.container}>
                <Topbar />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;