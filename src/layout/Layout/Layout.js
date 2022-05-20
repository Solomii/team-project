import {Outlet} from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import TopBar from "../TopBar/TopBar";

import styles from './styles.module.scss';

const Layout = () => {
    return (
        <div className={styles.wrapper}>
            <Sidebar />
            <main className={styles.container}>
                <TopBar />
                <Outlet />
            </main>
        </div>
    )
}

export default Layout;