import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const petsApi = createApi({
    reducerPath: 'petsApi',
    baseQuery : fetchBaseQuery({
        baseUrl: 'http://localhost:3001'
    }),
    tagTypes: ['Pet'],
    endpoints(builder){
        return {
            fetchPets: builder.query({
                query(type){
                    return `/pets?type_like=${type}`
                },
            providesTags: ['Pet']
            }),
            updatePets: builder.mutation({
                query: ({id, ...patch}) => ({
                    url: `/pets/${id}`,
                    method: 'PATCH',
                    body: patch
                }),
                invalidatesTags: ['Pet']
            })
        }
    }

})

export const { useFetchPetsQuery, useUpdatePetsMutation } = petsApi