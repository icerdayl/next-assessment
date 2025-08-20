import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useLoginInfo = () => {
    return useMutation({mutationFn: async ({password, email}: {password: string, email: string}) => {
        const response = await axios.post(`http://127.0.0.1:8000/api/login`, {password, email},
            
        );
        localStorage.setItem("token",response.data.token)
        return response.data
        
    },
    onSuccess: () => {
        return  useQuery({queryKey: ["listings"]})}
    })}