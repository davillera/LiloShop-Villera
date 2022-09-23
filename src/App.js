import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom"


function App() {
    return(
        <BrowserRouter>
            <NavBar/>
            <ItemListContainer greeting="Bienvenido al Catálogo" name="Dan"/>
        </BrowserRouter>
    ) 
}


export default App;