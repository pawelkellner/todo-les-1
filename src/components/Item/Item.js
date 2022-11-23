import { useState, useEffect } from "react"
import "./Item.css";

const Item = (props) => {
    const [done, setDone] = useState(false);
    const [className, setClassname ] = useState("todo__item")

    useEffect(() =>{
        if(done){
            setClassname("todo__item todo__item--done")
            setTimeout(() => {setClassname(className + " todo__item--gone")}, 800)
        }else{
            setClassname("todo__item")
        }
    }, [done]);

    const onItemClick = () => {
        setDone(!done);
    }

    return (
        <li onClick={onItemClick} className={className}>{props.name} </li>
    )

}

export default Item;