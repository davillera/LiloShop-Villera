const products = [
    {
        "id": 0,
        "title": "VESTIDO DE BAÑO ENTERIZO",
        "price": 25000,
        "color": "negro",
        "url": "../images/foto1.png"
    },
    {
        "id": 1,
        "title": "VESTIDO DE BAÑO DOS PIEZAS",
        "price": 25000,
        "color": "rojo",
        "url": "../images/foto2.png"
    },
    {
        "id": 2,
        "title": "VESTIDO DE BAÑO ESCOTE EN V",
        "price": 25000,
        "color": "negro",
        "url": "../images/foto3.png"
    }
]
export default function getItems() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data);
        }, 1500);
    });
}

export function getSingleItem(idItem) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let itemFind = data.find((item) => item.id === idItem);
            if (itemFind) resolve(itemFind);
            else reject(new Error("item no encontrado"));
        }, 1500);
    });
}