import { json } from "react-router-dom";

export default function Item() {

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

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Nuestros Productos</h2>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id} className="group relative">
              <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                <img
                  src={product.url}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
              </div>
              <div className="mt-4 flex justify-between">
                <div>
                  <h3 className="text-sm text-gray-700">
                    <a href={product.href}>
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.title}
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
