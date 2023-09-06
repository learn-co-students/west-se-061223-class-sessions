// import { createSlice } from '@reduxjs/toolkit'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const dogsApi = createApi({
    reducerPath: 'dogsApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers){
            headers.set('x-api-key', import.meta.env.DOGS_API_KEY)
            return headers
        }
    }),
    endpoints(builder){
        return {
            fetchBreeds: builder.query({
                query(limit=10){
                    return `/breeds?limit=${limit}`
                }
            })
        }
    }
})

export const { useFetchBreedsQuery } = dogsApi