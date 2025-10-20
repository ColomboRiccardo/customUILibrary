const AddShoppingCart = ({color, width = 24, height = 24}: {color: string, width: number, height: number}) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox={`0 0 24 24`}>
        <path fill={color} d="M11 9V6H8V4h3V1h2v3h3v2h-3v3h-2ZM7 22q-.825 0-1.413-.588T5 20q0-.825.588-1.413T7 18q.825 0 1.413.588T9 20q0 .825-.588 1.413T7 22Zm10 0q-.825 0-1.413-.588T15 20q0-.825.588-1.413T17 18q.825 0 1.413.588T19 20q0 .825-.588 1.413T17 22ZM7 17q-1.125 0-1.725-.988T5.25 14.05L6.6 11.6L3 4H1V2h3.275l4.25 9h7.025l3.875-7l1.75.95l-3.875 7q-.275.5-.725.775T15.55 13H8.1L7 15h12v2H7Z"></path>
    </svg>
)

export const PreviewCard = () => {
    return (
        <div className={"w-full bg-yellow-500 rounded-xl flex flex-col lg:flex-row text-left"}>
            <div className={"lg:w-1/2 w-full lg:h-100 h-60 bg-white lg:rounded-l-xl rounded-t-xl flex items-center justify-center"}>
                <p className={"text-black"}>Image goes here</p>
            </div>
            <div className={"lg:w-1/2 flex flex-col items-start justify-center gap-4 p-10"}>
                <p className={"text-xl uppercase"}>Perfume</p>
                <p className={"text-3xl font-bold"}>Gabrielle Essence Eau De Parfum</p>
                <p className={""}>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua</p>
                <p className={"text-4xl font-extrabold"}>149.99$</p>
                <button className={"mt-2 w-full h-14 flex items-center justify-center gap-2"}>
                    <AddShoppingCart color={"white"} height={24} width={24}/>
                    <p className={"text-xl"}>Add to cart</p>
                </button>
            </div>
        </div>
    );
};