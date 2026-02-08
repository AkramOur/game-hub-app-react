import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const fetchData = () =>
  apiClient.get<FetchResponse<Platform>>("/platforms").then((res) => res.data);

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: fetchData,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePlatforms;
