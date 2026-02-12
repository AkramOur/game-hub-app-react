import { useQuery } from "@tanstack/react-query";
import { Platform } from "../entities/Platform";
import { ApiClient, FetchResponse } from "../services/api-client";

const client = new ApiClient<Platform>("/platforms");

const usePlatforms = () =>
  useQuery<FetchResponse<Platform>, Error>({
    queryKey: ["platforms"],
    queryFn: client.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default usePlatforms;
