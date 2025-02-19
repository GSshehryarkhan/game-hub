import {
    Button,
    HStack,
    Image,
    List,
    ListItem,
    Spinner,
    Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../Hooks/useGenres";
import getCroppedUrl from "../services/image-module";

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading, error } = useGenres();

    if (error) return null;
    if (isLoading) return <Spinner />;

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
                        <Button
                            onClick={() => onSelectGenre(g)}
                            fontSize={"lg"}
                            variant={"link"}
                            fontWeight={
                                g.id === selectedGenre?.id ? "bold" : "normal"
                            }
                        >
                            {g.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
