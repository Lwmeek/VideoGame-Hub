import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";

function App() {

	const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // mobile view
				lg: `"nav nav" "aside main"` // computer view
			}}
			templateColumns={{
				base: "1fr",
				lg: "200px 1fr"
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show>
				<GridItem area="aside" bg="gold" paddingX={5}>
					<GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>
				</GridItem>
			</Show>
			<GridItem area="main" bg="dodgerblue">
				<GameGrid selectedGenre={selectedGenre}/>
			</GridItem>
		</Grid>
	);
}

export default App;
