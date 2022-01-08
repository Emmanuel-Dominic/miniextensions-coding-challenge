import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { User } from "./constants";

export const usersApi = createApi({
    reducerPath: "users",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com",
    }),
    tagTypes: ["Users"],
    endpoints: (builder) => ({
        getUsers: builder.query<User[], void>({
            query: () => "/users",
            providesTags: [{
                type: "Users",
                id: "LIST"
            }],
        }),
    })
})

export const { useGetUsersQuery } = usersApi;
