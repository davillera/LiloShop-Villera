import json from "./productos.json"
import ItemCount from "./ItemCount/ItemCount.js"
import Item from "./Item/Item.js"
import productos from "./productos.json"

const list = []
// for (const key in json) {
//   list.push({
//     id: json[key].id,
//     title: json[key].title,
//     price: json[key].price,
//     url: json[key].url
//   })
// }

export default function ItemListContainer(props) {


  return (
    <div className="vestido1">
      <Item items={productos} />
      {/* <p>{props.greeting}</p>
            <ul>
                {list.map((item) => (
                    <li key={item.id}>
                        <p key={item.title}/>
                        <img key={item.id} className="h-80 w-85 m-10" src={item.url}/>
                    </li>
                ))}
            </ul>
            
            <h2>Code By {props.name}</h2> */}
    </div>
  )
}
