export const Card = () => {
    return (
        <div className={"flex flex-col w-80 bg-yellow-500 rounded-xl p-4 shadow-2xl hover:scale-102 transition-all duration-500 hover:shadow-3xl"}>
            <div className={"w-full h-40 bg-white rounded-xl mb-4"}>

            </div>
            <div className={"flex flex-col items-start gap-1"}>
                <p className={"bg-white text-black w-min px-2 py-1 mb-1 rounded-sm"}>Learning</p>
                <p className={"mb-1 text-sm"}>Published 21 Dec 2023</p>
                <p className={"text-2xl font-bold mb-1"}>This is a card component</p>
                <p className={"text-left mb-2"}>These languages are the backbone of every website, defining structure, content and presentation</p>
                <div className={"flex items-center gap-2"}>
                    <div className={"rounded-full w-9 h-9 bg-white"}></div>
                    <p className={"font-medium"}>Name of the author</p>
                </div>
            </div>
        </div>
    );
};