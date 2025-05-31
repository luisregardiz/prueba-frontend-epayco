import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { ItemList, useAddItem, useItems } from "../modules/items";

export const Home = () => {
    const { data: items, error, isLoading } = useItems();
    const { register, handleSubmit, reset } = useForm();
    const mutation = useAddItem();

    const onSubmit = (data: Item) => {
        mutation.mutate(data);
        reset();
    };

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {(error as Error).message}</div>;

    return (
        <div>
            <h1>Add New Item</h1>
            <form
                onSubmit={handleSubmit(onSubmit as SubmitHandler<FieldValues>)}
            >
                <input {...register("title")} placeholder="Title" required />
                <textarea {...register("body")} placeholder="Body" required />
                <button type="submit">Add Item</button>
            </form>
            <h2>Items List</h2>
            <ItemList items={items} />
        </div>
    );
};
