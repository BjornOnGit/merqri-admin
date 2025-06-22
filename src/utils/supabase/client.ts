import { createBrowserClient } from "@supabase/ssr";
import { SUPABASE_KEY, SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY } from "./constants";

if (!SUPABASE_URL) {
  throw new Error("SUPABASE_URL is not defined");
}
if (!SUPABASE_KEY) {
  throw new Error("SUPABASE_ANON_KEY is not defined");
}

export const supabaseBrowserClient = createBrowserClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    db: {
      schema: "public",
    },
  }
);

export const supabaseAdmin = createBrowserClient(
  SUPABASE_URL,
  SUPABASE_KEY,
  {
    auth: {
      autoRefreshToken: false,
      persistSession: false,
    },
  }
)
