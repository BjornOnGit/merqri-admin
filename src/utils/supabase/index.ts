import { createServerClient } from "@supabase/ssr";
import { SUPABASE_KEY, SUPABASE_URL } from "./constants"

export const supabaseServerClient = (cookies: import("@supabase/ssr").CookieMethods) =>
  createServerClient(SUPABASE_URL, SUPABASE_KEY, {
    db: { schema: "public" },
    cookies,
  });