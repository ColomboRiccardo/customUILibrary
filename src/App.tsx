import './App.css'
import {Card} from './components/card/Card'
import { PreviewCard } from './components/previewCard/PreviewCard'

function App() {

    return (
        <main className={"flex flex-col items-center gap-10"}>
            <h1 className="text-3xl">Custom UI Library by Riccardo Colombo</h1>
            <Card/>
            <PreviewCard/>
        </main>
    )
}

export default App
