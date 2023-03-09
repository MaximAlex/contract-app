import React from 'react';
import styles from './toolbar.module.css';
interface ComponentProps {
    children: any
}
const Toolbar = ({ children }: ComponentProps) => {
    return (
        <nav className={styles.toolbar + " navbar navbar-dark bg-dark px-3 toolbar"}>
            <div className="justify-content-end d-inline-flex flex-row">
                {children}
            </div> 
        </nav>

    );
};

export default Toolbar;