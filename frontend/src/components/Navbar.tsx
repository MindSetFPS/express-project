import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Button, Navbar as Nav } from "flowbite-react";

const Navbar: React.FC = () => {
    return (
        <Nav fluid className="z-10 bg-white py-2">
            <Nav.Brand>
                <Logo />
            </Nav.Brand>
            <div className="flex">
                <Nav.Toggle />
            </div>
            <Nav.Collapse className="md:flex md:justify-between mx-2 bg-blue items-center" >
                <div >
                    <SearchBar />
                </div>
                <div className="flex py-2 md:py-0 ">
                    <Button className="mr-2 w-full md:w-auto" > Iniciar sesión</Button>
                    <Button className="w-full md:w-auto" color="gray">Registrarme</Button>
                </div>
            </Nav.Collapse>
        </Nav>
    );
}

export default Navbar;