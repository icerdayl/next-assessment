
import { axiosApi } from "@/app/lib/axios";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";



export const useDeleteListing = () => {
    const queryClient = useQueryClient()

    return useMutation({mutationFn: async (id: string) => {
        const response = axiosApi.delete(`/listings/${id}`);
        return response
    },
    onSuccess: () => {
        toast.success("Deleted Succesfully!");
        return queryClient.invalidateQueries({queryKey: ["listings"]});
    }
    })}