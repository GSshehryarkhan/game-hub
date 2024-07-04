import { useState } from "react";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { Genre } from "./Hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./Hooks/useGames";

const App = () => {
    const [genre, setGenre] = useState<Genre | null>(null);
    const [platform, setPlatform] = useState<Platform | null>(null);

    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: "1fr",
                lg: "200px 1fr",
            }}
        >
            <GridItem area="nav">
                <Navbar></Navbar>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList
                        selectedGenre={genre}
                        onSelectGenre={(genre) => setGenre(genre)}
                    />
                </GridItem>
            </Show>
            <GridItem area="main">
                <PlatformSelector
                    selectedPlatform={platform}
                    onSelectPlatform={(platform) => setPlatform(platform)}
                />
                <GameGrid selectedPlatform={platform} selectedGenre={genre} />
            </GridItem>
        </Grid>
    );
};

export default App;
