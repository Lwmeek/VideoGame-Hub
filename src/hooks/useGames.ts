import { GameQuery } from "../App";
import useData from "./useData";

export interface Platform {
	id: number;
	name: string;
	slug: string;
}
export interface Game {
	id: number;
	name: string;
	background_image: string;
	parent_platforms: { platform: Platform }[]; // based off the design of the api doc.
	metacritic: number;
	rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
	useData<Game>(
		"/games",
		{
			params: {
				genres: gameQuery.genre?.id,
				platforms: gameQuery.platform?.id,
				ordering: gameQuery.sortOrder,
				serach: gameQuery.searchText,
			},
		},
		[gameQuery]
	);

export default useGames;
