import {CheckCircle} from "../icons/CheckCircle.tsx";

export const SubscribeToNewsletter = () => {
    return (
        <div className={"w-full bg-white rounded-xl flex lg:flex-row flex-col-reverse items-center lg:p-6"}>
            <div className={"lg:w-1/2 w-full text-black text-left flex flex-col gap-2 lg:p-0 lg:pr-6 p-6"}>
                <p className={"text-5xl font-bold"}>Stay Updated!</p>
                <p className={"text-xl mt-4"}>Join our newsletter to get the latest updates and exclusive offers</p>
                <ul className={"mt-4"}>
                    <li className={"mt-2 flex items-center gap-2"}><CheckCircle color={"black"} height={24} width={24}/><p>Product discovery and building what matters</p></li>
                    <li className={"mt-2 flex items-center gap-2"}><CheckCircle color={"black"} height={24} width={24}/><p>Measuring to ensure updates are a success</p></li>
                    <li className={"mt-2 flex items-center gap-2"}><CheckCircle color={"black"} height={24} width={24}/><p>And much, much more!</p></li>
                </ul>
                <form className={"flex flex-col gap-2 mt-4"}>
                    <label htmlFor={"email"} className={"text-xl font-medium"}>Email address</label>
                    <input id={"email"} type="text" placeholder="Enter your email address" className={"w-full border border-black h-12 p-4"}/>
                    <input type="submit" value="Subscribe" className={"w-full h-12 bg-black text-white rounded-lg"}/>
                </form>
            </div>
            <div className={"lg:w-1/2 w-full lg:h-150 h-80 bg-yellow-500 rounded-xl"}></div>
        </div>
    );
};