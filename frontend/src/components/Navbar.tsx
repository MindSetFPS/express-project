import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import { Button, Container, Flex, Box } from '@radix-ui/themes';

const Navbar: React.FC = () => {
    return (
        <nav>
            <Container>
                <Flex justify={"between"} align={"center"} gapX={"2"}>
                    <Logo />
                    <Box flexGrow="1">
                        <SearchBar />
                    </Box>
                    <Box>
                        <Button m="1" radius="full" variant="surface">
                            Iniciar sesión
                        </Button>
                        <Button m="1" radius="full">
                            Registrarme
                        </Button>
                    </Box>

                    {/* <loginButton /> */}
                    {/* <createAccount /> */}
                </Flex>
            </Container>
        </nav>
    );
}

export default Navbar;