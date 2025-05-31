import { FC } from "react";

interface ItemProps {
    item: Item;
}

export const Item: FC<ItemProps> = ({ item }) => {
    return (
        <div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
    );
};
