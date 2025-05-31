import axios from "axios";

export const addItem = async (newItem: Item) => {
    const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        newItem
    );
    return response.data;
};
