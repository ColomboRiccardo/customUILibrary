import {useState} from "react";

export const Pricing = () => {
    const [switched, setSwitched] = useState(false)

    const handleSwitch = () => {
        setSwitched(!switched)
    }

    return (
        <section className={"w-full flex flex-col items-center"}>
            <h2 className={"text-5xl font-bold mb-12"}>Our Pricing:</h2>
            <div className={"flex items-center justify-center gap-3 mb-6 cursor-pointer"} onClick={handleSwitch}>
                <p className={"text-xl"}>Monthly</p>
                <ToggleSwitch switched={switched}/>
                <p className={"text-xl"}>Yearly</p>
            </div>
            <div className={"w-full flex lg:flex-row flex-col gap-4 lg:gap-0 items-center text-black"}>
                <div
                    className={"lg:w-90 w-full h-100 bg-white lg:rounded-r-none rounded-xl flex flex-col gap-3 items-center justify-center p-10"}>
                    <p className={"text-2xl font-bold"}>Basic</p>
                    <p className={"text-5xl font-bold mb-4"}>19.90€</p>
                    <hr className={"w-full"}/>
                    <p>500 GB Storage</p>
                    <hr className={"w-full"}/>
                    <p>2 Users</p>
                    <hr className={"w-full"}/>
                    <p>Send up to 3 files</p>
                    <hr className={"w-full"}/>
                    <button className={"w-full !bg-yellow-500 text-white mt-4"}>Learn more</button>
                </div>
                <div
                    className={"lg:w-90 w-full h-110 bg-yellow-500 text-white rounded-xl flex flex-col gap-3 items-center justify-center p-10"}>
                    <p className={"text-2xl font-bold"}>Professional</p>
                    <p className={"text-5xl font-bold mb-4"}>19.90€</p>
                    <hr className={"w-full"}/>
                    <p>500 GB Storage</p>
                    <hr className={"w-full"}/>
                    <p>2 Users</p>
                    <hr className={"w-full"}/>
                    <p>Send up to 3 files</p>
                    <hr className={"w-full"}/>
                    <button className={"w-full mt-4"}>Learn more</button>
                </div>
                <div
                    className={"lg:w-90 w-full h-100 bg-white lg:rounded-l-none rounded-xl flex flex-col gap-3 items-center justify-center p-10"}>
                    <p className={"text-2xl font-bold"}>Master</p>
                    <p className={"text-5xl font-bold mb-4"}>19.90€</p>
                    <hr className={"w-full"}/>
                    <p>500 GB Storage</p>
                    <hr className={"w-full"}/>
                    <p>2 Users</p>
                    <hr className={"w-full"}/>
                    <p>Send up to 3 files</p>
                    <hr className={"w-full"}/>
                    <button className={"w-full !bg-yellow-500 text-white mt-4"}>Learn more</button>
                </div>
            </div>
        </section>
    );
};

const ToggleSwitch = ({switched} : {switched: boolean}) => {

    return (
        <div className={"flex items-center"}>
            <input type={"checkbox"} className={"hidden"}/>
            <div className={`w-20 h-10 bg-yellow-500 flex rounded-full`}>
                <div className={`w-10 h-10 bg-white ${switched ?  "translate-x-10" : ""} transition-all duration-500 ease-in-out rounded-full`}></div>
            </div>
        </div>
    );
};