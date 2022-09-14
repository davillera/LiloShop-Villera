import CartWidget from "./CartWidget.js"

export default function NavBar() {
    return (
        <header className="header flex flex-row ">
            <div className="title flex flex-auto w-16 text-xl font-bold">
                <a href="/" className="site-title rounded-xl items-center">Lilo Shop</a>
            </div>

            <nav className="nav flex flex-auto w-2 text-lg font-semibold items-center">
                <ul className="flex flex-row gap-6">
                    <li> <a className="rounded-xl basis-1/4" href="/vestidosbano">VESTIDOS DE BAÑO</a> </li>
                    <li> <a className="rounded-xl basis-1/4" href="/ropainterior">ROPA INTERIOR</a> </li>
                    <li> <a className="rounded-xl basis-1/4" href="/ropadeportiva">ROPA DEPORTIVA</a> </li>
                    <li> <a className="rounded-xl basis-1/4" href="/pijamas">PIJAMAS</a> </li>
                </ul>
            </nav>
            <CartWidget/>
            
        </header>
    )
}