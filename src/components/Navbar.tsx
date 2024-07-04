import { HStack, Image } from "@chakra-ui/react";
import React from "react";
import randomImage from "../assets/random.jpg";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack padding={"15px"}>
            <Image src={randomImage} boxSize={"100px"} />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    );
};

export default Navbar;
