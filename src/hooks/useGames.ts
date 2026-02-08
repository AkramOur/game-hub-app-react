import { useQuery } from "@tanstack/react-query";
import { GameQuery } from "../App";
import { ApiClient, FetchResponse } from "../services/api-client";
import { Platform } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const client = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery<FetchResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      client.getAll({
        params: {
          genres: gameQuery.genre?.id,
          platforms: gameQuery.platform?.id,
          ordering: gameQuery.sortOrder,
          search: gameQuery.search,
        },
      }),

    staleTime: 24 * 60 * 60 * 1000, // 24h
  });

export default useGames;
