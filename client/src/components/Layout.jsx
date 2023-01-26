import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <div className="p-4 flex flex-col min-h-screen max-w-[1300px] m-auto">
            <Header />
            <Outlet />
        </div>
    );
};

export default Layout;
