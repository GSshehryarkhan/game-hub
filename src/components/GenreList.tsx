import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../Hooks/useGenres";
import getCroppedUrl from "../services/image-module";

const GenreList = () => {
    const { data } = useGenres();
    return (
        <List>
            {data.map((g) => (
                <ListItem key={g.id} paddingY={"5px"}>
                    <HStack>
                        <Image
                            boxSize={"32px"}
                            borderRadius={8}
                            src={getCroppedUrl(g.image_background)}
                        />
                        <Text fontSize={"lg"}>{g.name}</Text>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
