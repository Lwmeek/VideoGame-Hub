import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";

const apiClient = new APIClient<Platforms>("/platforms/lists/parents");

export interface Platforms {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () =>
	useQuery({
		queryKey: ["platforms"],
		queryFn: apiClient.getAll,
		staleTime: 24 * 60 * 60 * 1000, //24hrs
	});

export default usePlatforms;
