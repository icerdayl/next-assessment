import { axiosApi } from "@/app/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

export const useUpdateListing = () => {
    const queryClient=useQueryClient()
    return useMutation({mutationFn: async (updatedList: any) => {
        const response = axiosApi.put(`/listings/${updatedList.id}`, updatedList);
        return response
    },
    onSuccess: () => {
        toast.success("Updated Succesfully! 😁");
        return  queryClient.invalidateQueries({queryKey: ["listings"]})
    },
    onError: () => {
        toast.error("An error occured. Updating failed 😭")
    }
    })}