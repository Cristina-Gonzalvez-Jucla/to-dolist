import { type } from "os";
import { Item } from "../../types/item";
import { text } from "stream/consumers";


type itemsList = {
    items: Item[];
};

export function ShowItems(props: itemsList) {
    return (
        <div className="main-list-container{">
            {props.items.map((item) =>
            <li>{item.text}</li>)}
        </div>
    );
};