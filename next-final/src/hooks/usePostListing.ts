import { axiosApi } from "@/app/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import { toast } from "react-toastify";

export const usePostListing = () => {
    const queryClient = useQueryClient()
    return useMutation({mutationFn: async (newListing: any) => {
        const response = axiosApi.post('/listings', newListing);
        return response
    },
    onSuccess: () => {
        toast.success("Added Succesfuly! 😁");
        return queryClient.invalidateQueries({queryKey: ["listings"]});
    },
    onError: () => {
        toast.error("An error occured. Posting failed 😭")
    }
    })}






// export const usePostListing = () => {
//     return useMutation({mutationFn: async (newListing) => {
//         const response = await axios.post('http://127.0.0.1:8000/api/listings/all', newListing);
//         return response.data
//     },
//     onSuccess: () =>{
//         return useQuery({queryKey: ["listings"]})
//     }})

// }
