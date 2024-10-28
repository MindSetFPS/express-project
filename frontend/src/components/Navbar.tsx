import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Button } from "flowbite-react";

const Navbar: React.FC = () => {
    return (
        <nav className="z-10 bg-white py-2">
            <div className="flex justify-between mx-2 bg-blue items-center" >
                <Logo />
                <div >
                    <SearchBar />
                </div>
                <div className="flex">
                    <Button className="mr-2" pill >
                        Iniciar sesión
                    </Button>
                    <Button className="" pill color="gray">
                        Registrarme
                    </Button>
                </div>

                {/* <loginButton /> */}
                {/* <createAccount /> */}
            </div>
        </nav>
    );
}

export default Navbar;