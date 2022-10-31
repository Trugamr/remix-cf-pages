import type { LoaderArgs } from "@remix-run/cloudflare";

export const loader = ({ request }: LoaderArgs) => {
  // @ts-ignore
  return new Response(JSON.stringify({ cf: request.cf }), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
