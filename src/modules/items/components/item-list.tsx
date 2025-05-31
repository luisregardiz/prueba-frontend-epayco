import type { FC } from "react";
import { Item } from "./item";

interface ItemListProps {
    items: Item[];
}

export const ItemList: FC<ItemListProps> = ({ items }) => {
    return (
        <div>
            {items.map((item) => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
};
