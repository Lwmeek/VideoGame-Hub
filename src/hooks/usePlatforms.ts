import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/api-client";

interface Platforms {
	id: number;
	name: string;
	slug: string;
}

const usePlatforms = () => useQuery({
	queryKey: ["platforms"],
	queryFn: () => apiClient.get<FetchResponse<Platforms>>("/platforms/lists/parents").then(res => res.data),
	staleTime: 24 * 60 * 60 * 1000, //24hrs
})

export default usePlatforms;
