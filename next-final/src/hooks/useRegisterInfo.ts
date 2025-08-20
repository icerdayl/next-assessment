import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";
import { headers } from "next/headers";
import { toast } from "react-toastify";

export const useRegisterInfo = () => {
    return useMutation({mutationFn: async ({name, email, password, passwordConfirm}: {name: string, email: string, password:string, passwordConfirm:string}) => {
        const response = await axios.post(`http://127.0.0.1:8000/api/register`, {name, email, password, passwordConfirm},
            
        );
        return response.data
    },
    onSuccess: () => {
        return  useQuery({queryKey: ["listings"]})
        return toast("Registration Successful")
    }
    })}