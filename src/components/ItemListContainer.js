import json from "../images/images.json"
import ItemCount from "./ItemCount/ItemCount.js"

const list = []
for(const key in json){
    list.push({
        name: key,
        id: json[key].id,
        url: json[key].url
    })
}

export default function ItemListContainer(props) {
    const onAdd = (cantidad) =>{
        alert(`llevas ${cantidad}`)
    }
    return(
        <div className="vestido1">
            <h2>VESTIDO DE BAÑO ENTERIZO DISEÑOS Y COLORES SURTIDOS</h2>
            <p>{props.greeting}</p>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <img key={item.id} className="h-80 w-85 m-10" src={item.url}/>
                    </li>
                ))}
            </ul>
            <ItemCount initial={1} stock={7} onAdd={onAdd}/>
            <h2>Code By {props.name}</h2>
        </div>

    )
}
