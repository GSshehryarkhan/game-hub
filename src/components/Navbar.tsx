import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import randomImage from "../assets/random.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const Navbar = () => {
    return (
        <HStack padding={"15px"}>
            <Image src={randomImage} boxSize={"100px"} />
            <SearchInput />
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;
