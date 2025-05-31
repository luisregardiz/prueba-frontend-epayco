import { useMutation, useQueryClient } from "react-query";
import { addItem } from "../services/add-item";

export const useAddItem = () => {
    const queryClient = useQueryClient();
    return useMutation(addItem, {
        onSuccess: () => {
            queryClient.invalidateQueries("items");
        },
    });
};
