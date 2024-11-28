import { queryOptions } from "@tanstack/react-query";
import { api } from "./fetch";
import { QueryError } from "@/interfaces/api";

export const normalRetryCount = 2;
export const normalStaleTime = 1000 * 60 * 10;

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
});

export const tarotQuery = {
  execute,
};
