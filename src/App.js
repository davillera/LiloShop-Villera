import "./App.css";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import itemDetailContainer from "./components/itemDetailContainer/itemDetailContainer.js"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"


function App() {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>

                <Route path="/" element={
                    <ItemListContainer greeting="Bienvenido al Catálogo" name="Dan"/>
                }/>

                <Route path="/vestidos" element={
                    <itemDetailContainer/>
                }/>

                </Routes>
        </BrowserRouter>
    ) 
}


export default App;