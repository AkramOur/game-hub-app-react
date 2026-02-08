import { useQuery } from "@tanstack/react-query";
import { ApiClient, FetchResponse } from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const client = new ApiClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: client.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePlatforms;
