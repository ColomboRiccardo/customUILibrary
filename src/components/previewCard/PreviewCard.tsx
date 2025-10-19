export const PreviewCard = () => {
    return (
        <div className={"w-full bg-yellow-500 rounded-xl flex text-left"}>
            <div className={"w-1/2 h-100 bg-white rounded-l-xl flex items-center justify-center"}>
                <p className={"text-black"}>Image goes here</p>
            </div>
            <div className={"w-1/2 flex flex-col items-start justify-center gap-4 p-10"}>
                <p className={"text-xl uppercase"}>Perfume</p>
                <p className={"text-3xl font-bold"}>Gabrielle Essence Eau De Parfum</p>
                <p className={""}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua</p>
                <p className={"text-4xl font-extrabold"}>149.99$</p>
                <button className={"mt-2 w-full h-14"}>Add to cart</button>
            </div>
        </div>
    );
};