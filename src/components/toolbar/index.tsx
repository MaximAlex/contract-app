import React from 'react';
interface ComponentProps {
    children: any
}
const Toolbar = ({ children }: ComponentProps) => {
    return (
        <nav className="navbar navbar-dark bg-dark px-3">
            <div className="row justify-content-end d-inline-flex">
                {children}
            </div>
        </nav>

    );
};

export default Toolbar;