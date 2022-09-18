import "./ItemCount.css";
import React, {useState} from "react";

export const ItemCount = ({initial, stock, onAdd}) =>{
    const [count, SetCount] = useState(initial);

    const incrementar = () =>{
        SetCount(count + 1);
    }
    const decrementar = () =>{
        SetCount(count - 1);
    }
    
    return(
        <div className="counter">
            <button disabled={ count <= 1} onClick={decrementar} className="btn">-</button>
            <span>{count}</span>
            <button disabled={ count >= stock } onClick={incrementar} className="btn">+</button>
            <div>
                <button className="btn" disabled={stock<=0} onClick={() => onAdd(count)}>Agrégalo Al Carrito</button>
            </div>
        </div>
    )
}
    


export default ItemCount;