import json from "../images/images.json"

const list = []
for(const key in json){
    list.push({
        name: key,
        id: json[key].id,
        url: json[key].url
    })
}

export default function ItemListContainer(props) {
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

            <button class="btn-cart ">
                Agregar al Carrito
            </button>

            <h2>Code By {props.name}</h2>
        </div>
    )
}
