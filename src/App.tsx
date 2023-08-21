import { useState } from "react";
import { ShowItems } from "./components/List/List";
import { Item } from "./types/item";
import { text } from "stream/consumers";

export function App() {
    const [todo, setTodo] = useState<Item[]>([{
        id: 1,
        text: 'first task',
        completed: true,
    }]);

    return (
        <div className="main-container">
            <h1>To-Do List</h1>
            <ShowItems items={todo} />
            <div>
                <label>
                    <input className="itemInput"></input>
                    <button>Add</button>
                </label>
            </div>
        </div>
    );
};