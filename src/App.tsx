import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";

function App() {
	return (
		<Grid
			templateAreas={{
				base: `"nav" "main"`, // mobile view
				lg: `"nav nav" "aside main"`, // computer view
			}}
		>
			<GridItem area="nav">
				<NavBar />
			</GridItem>
			<Show>
				<GridItem area="aside" bg="gold">
					<GenreList />
				</GridItem>
			</Show>
			<GridItem area="main" bg="dodgerblue">
				<GameGrid />
			</GridItem>
		</Grid>
	);
}

export default App;
