import { queryOptions } from "@tanstack/react-query";
import { api } from "./fetch";
import { QueryError } from "@/interfaces/api";

const normalRetryCount = 2;
const normalStaleTime = 1000 * 60 * 10;

const execute = queryOptions<
  Awaited<ReturnType<typeof api.tarot.execute>>["body"],
  QueryError
>({
  queryKey: ["tarot", "execute"],
  queryFn: async () => {
    const response = await api.tarot.execute();
    if (response.ok && response.body) {
      return response.body;
    } else {
      return Promise.reject({
        status: response.status,
        message: "Failed to fetch tarot",
      });
    }
  },
  retry: normalRetryCount,
  staleTime: normalStaleTime,
});

export const tarotQuery = {
  execute,
};
