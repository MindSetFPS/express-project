import React from "react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
    return (
        <nav style={{ backgroundColor: "blue"}} >
            <Logo />
            {/* <searchBar /> */}
            {/* <loginButton /> */}
            {/* <createAccount /> */}
        </nav>
    );
}

export default Navbar;