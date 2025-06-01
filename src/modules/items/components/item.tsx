import { FC } from "react";

interface ItemProps {
    item: Item;
}

export const Item: FC<ItemProps> = ({ item }) => {
    return (
        <div className="flex flex-col gap-2 bg-neutral-100 hover:bg-neutral-200 transition-all duration-300 rounded-md p-4 cursor-pointer">
            <h3 className="text font-semibold">{item.title}</h3>
            <p className="text-sm text-neutral-600">{item.body}</p>
        </div>
    );
};
