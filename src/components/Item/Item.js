import { useState, useEffect } from "react"
import "./Item.css";

const Item = (props) => {
    let classNames = ""

    const [done, setDone] = useState(false);

    if(done){
        classNames = "todo__item todo__item--done";
    }else{
        classNames = "todo__item";
    }

    const onItemClick = () => {
        setDone(!done);
    }

    return (
        <li onClick={onItemClick} className={classNames}>{props.name} </li>
    )

}

export default Item;