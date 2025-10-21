import './App.css'
import {ComponentsPage} from "./pages/componentspage/ComponentsPage.tsx";
import {Route, Routes} from "react-router";
import {MainHeader} from "./components/header/MainHeader.tsx";
import {CharacterCounter} from "./pages/charactercounter/CharacterCounter.tsx";


function App() {

    return (
        <>
            <MainHeader/>
            <Routes>
                <Route path={"/"} element={<ComponentsPage/>}/>
                <Route path={"/charactercounter"} element={<CharacterCounter/>}/>
            </Routes>
        </>
    )
}

export default App
