import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Klass, Student } from "./services";

const AirtableAPIKey = process.env.AIRTABLE_APIKEY;

export const studentsApi = createApi({
    reducerPath: "klass",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://api.airtable.com/v0/app8ZbcPx7dkpOnP0",
    }),
    tagTypes: ["Klass"],
    endpoints: (builder) => ({
        getKlasses: builder.query<Klass, void>({
            query: () => `/Classes?api_key=${AirtableAPIKey}`,
        }),
        getStudents: builder.query<Student, void>({
            query: () => `/Students?api_key=${AirtableAPIKey}`,
        }),
    })
});

export const { useGetKlassesQuery, useGetStudentsQuery } = studentsApi;
