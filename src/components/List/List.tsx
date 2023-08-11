import './List.css';

export type ListProps = {
    title: string;
    list: List[];
};

export interface List {
    text: string;
};

export const ListContainer = (props: ListProps) =>
    <div className="main-list-container">
        <div className="Title">{props.title}</div>
        <input className="Input"></input>
    </div>;
