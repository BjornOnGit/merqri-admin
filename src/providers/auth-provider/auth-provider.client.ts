"use client";

import type { AuthProvider } from "@refinedev/core";
import type { DataProvider } from "@refinedev/core";
import { supabaseBrowserClient, supabaseAdmin } from "@utils/supabase/client";

export const authProviderClient: AuthProvider = {
  login: async ({ email, password }) => {
    const { data, error } = await supabaseBrowserClient.auth.signInWithPassword(
      {
        email,
        password,
      }
    );

    if (error) {
      return {
        success: false,
        error,
      };
    }

    if (data?.session) {
      await supabaseBrowserClient.auth.setSession(data.session);

      return {
        success: true,
        redirectTo: "/",
      };
    }

    // for third-party login
    return {
      success: false,
      error: {
        name: "LoginError",
        message: "Invalid username or password",
      },
    };
  },
  logout: async () => {
    const { error } = await supabaseBrowserClient.auth.signOut();

    if (error) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: true,
      redirectTo: "/login",
    };
  },
  register: async ({ email, password }) => {
    try {
      const { data, error } = await supabaseBrowserClient.auth.signUp({
        email,
        password,
      });

      if (error) {
        return {
          success: false,
          error,
        };
      }

      if (data) {
        return {
          success: true,
          redirectTo: "/",
        };
      }
    } catch (error: any) {
      return {
        success: false,
        error,
      };
    }

    return {
      success: false,
      error: {
        message: "Register failed",
        name: "Invalid email or password",
      },
    };
  },
  check: async () => {
    const { data, error } = await supabaseBrowserClient.auth.getUser();
    const { user } = data;

    if (error) {
      return {
        authenticated: false,
        redirectTo: "/login",
        logout: true,
      };
    }

    if (user) {
      return {
        authenticated: true,
      };
    }

    return {
      authenticated: false,
      redirectTo: "/login",
    };
  },
  getPermissions: async () => {
    const user = await supabaseBrowserClient.auth.getUser();

    if (user) {
      return user.data.user?.role;
    }

    return null;
  },
  getIdentity: async () => {
    const { data } = await supabaseBrowserClient.auth.getUser();

    if (data?.user) {
      return {
        ...data.user,
        name: data.user.email,
      };
    }

    return null;
  },
  onError: async (error) => {
    if (error?.code === "PGRST301" || error?.code === 401) {
      return {
        logout: true,
      };
    }

    return { error };
  },
};

export const supabaseAdminDataProvider: DataProvider = {
  getList: async ({ resource, pagination, filters, sorters, meta }) => {
    let query = supabaseAdmin.from(resource).select("*", { count: "exact" })

    // Apply filters
    if (filters) {
      filters.forEach((filter) => {
        if (filter.operator === "eq") {
          query = query.eq(filter.field, filter.value)
        } else if (filter.operator === "ne") {
          query = query.neq(filter.field, filter.value)
        } else if (filter.operator === "lt") {
          query = query.lt(filter.field, filter.value)
        } else if (filter.operator === "lte") {
          query = query.lte(filter.field, filter.value)
        } else if (filter.operator === "gt") {
          query = query.gt(filter.field, filter.value)
        } else if (filter.operator === "gte") {
          query = query.gte(filter.field, filter.value)
        } else if (filter.operator === "in") {
          query = query.in(filter.field, filter.value)
        } else if (filter.operator === "contains") {
          query = query.ilike(filter.field, `%${filter.value}%`)
        } else if (filter.operator === "containss") {
          query = query.like(filter.field, `%${filter.value}%`)
        } else if (filter.operator === "null") {
          query = query.is(filter.field, null)
        } else if (filter.operator === "nnull") {
          query = query.not(filter.field, "is", null)
        }
      })
    }

    // Apply sorting
    if (sorters && sorters.length > 0) {
      sorters.forEach((sorter) => {
        query = query.order(sorter.field, { ascending: sorter.order === "asc" })
      })
    }

    // Apply pagination
    if (pagination) {
      const { current = 1, pageSize = 10 } = pagination
      const from = (current - 1) * pageSize
      const to = from + pageSize - 1
      query = query.range(from, to)
    }

    const { data, error, count } = await query

    if (error) {
      throw error
    }

    return {
      data: data || [],
      total: count || 0,
    }
  },

  getOne: async ({ resource, id, meta }) => {
    const { data, error } = await supabaseAdmin.from(resource).select("*").eq("id", id).single()

    if (error) {
      throw error
    }

    return {
      data,
    }
  },

  getMany: async ({ resource, ids, meta }) => {
    const { data, error } = await supabaseAdmin.from(resource).select("*").in("id", ids)

    if (error) {
      throw error
    }

    return {
      data: data || [],
    }
  },

  create: async ({ resource, variables, meta }) => {
    const { data, error } = await supabaseAdmin.from(resource).insert(variables).select().single()

    if (error) {
      throw error
    }

    return {
      data,
    }
  },

  update: async ({ resource, id, variables, meta }) => {
    const { data, error } = await supabaseAdmin.from(resource).update(variables).eq("id", id).select().single()

    if (error) {
      throw error
    }

    return {
      data,
    }
  },

  deleteOne: async ({ resource, id, meta }) => {
    const { data, error } = await supabaseAdmin.from(resource).delete().eq("id", id).select().single()

    if (error) {
      throw error
    }

    return {
      data,
    }
  },

  deleteMany: async ({ resource, ids, meta }) => {
    const { data, error } = await supabaseAdmin.from(resource).delete().in("id", ids).select()

    if (error) {
      throw error
    }

    return {
      data: data || [],
    }
  },

  getApiUrl: () => {
    return process.env.NEXT_PUBLIC_SUPABASE_URL!
  },

  custom: async ({ url, method, filters, sorters, payload, query, headers, meta }) => {
    // Custom method implementation if needed
    throw new Error("Custom method not implemented")
  },
}
