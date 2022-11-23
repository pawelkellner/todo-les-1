import Item from "../Item/Item";
import "./Todo.css";

const Todo = ({title, items}) => {
    let itemsToBeRendered = items.map(item => {return <Item name={item.name} done={item.done}/>})

    return (
        <article className="todo">
            <header class="todo__header">
                <h1 class="todo__heading">{title}</h1>
            </header>
            <ul className="todo__list">
                {itemsToBeRendered}
            </ul>
        </article>
    );
}

export default Todo;