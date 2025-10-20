import './App.css'
import {Card} from './components/card/Card'
import { PreviewCard } from './components/previewCard/PreviewCard'
import {SubscribeToNewsletter} from "./components/subscribeToNewsletter/SubscribeToNewsletter.tsx";
import {Pricing} from "./components/pricing/Pricing.tsx";

function App() {

    return (
        <main className={"flex flex-col items-center gap-10"}>
            <h1 className="text-3xl">Custom UI Library by Riccardo Colombo</h1>
            <Card/>
            <PreviewCard/>
            <SubscribeToNewsletter/>
            <Pricing/>
        </main>
    )
}

export default App
