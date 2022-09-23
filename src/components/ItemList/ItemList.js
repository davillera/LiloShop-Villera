import Item from "../Item/Item.js"
import ItemCount from "../ItemCount/ItemCount.js"

export default function ItemList (){
    return(
        <Item/>,
        <ItemCount initial={1} stock={7}/>
    )
    
}