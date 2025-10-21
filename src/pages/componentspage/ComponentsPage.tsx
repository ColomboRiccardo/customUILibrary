import {Card} from "../../components/card/Card.tsx";
import {PreviewCard} from "../../components/previewCard/PreviewCard.tsx";
import {SubscribeToNewsletter} from "../../components/subscribeToNewsletter/SubscribeToNewsletter.tsx";
import {Pricing} from "../../components/pricing/Pricing.tsx";

export const ComponentsPage = () => {
    return (
        <main className={"w-10/12 flex flex-col items-center gap-10 m-auto"}>
            <h1 className="text-3xl">Custom UI Library by Riccardo Colombo</h1>
            <Card/>
            <PreviewCard/>
            <SubscribeToNewsletter/>
            <Pricing/>
        </main>
    );
};