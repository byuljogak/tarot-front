export const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

export const url = {
  tarot: {
    execute: "/tarot/execute",
  },
};

const customFetch = async <T = unknown>(
  input: string | URL | globalThis.Request,
  init?: RequestInit,
  type: "json" | undefined = "json",
) => {
  const url = `${baseUrl}${input}`;
  const response = await fetch(url, {
    ...init,
    credentials: "include",
  });

  let body: T | undefined;

  if (response.ok && type) {
    switch (type) {
      case "json":
        body = await response.json();
        break;
      default:
        break;
    }
  }

  return {
    ok: response.ok, // pass the ok status along
    status: response.status, // pass the status along
    headers: response.headers, // pass the headers along
    body, // pass the body along
  };
};

export const api = {
  tarot: {
    execute: async () => {
      return customFetch<{
        keywords: string[];
        description: string;
      }>(url.tarot.execute);
    },
  },
};
