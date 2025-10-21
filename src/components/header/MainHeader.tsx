import {Link} from "react-router";

export const MainHeader = () => {
    return (
        <header className={"w-full flex justify-start items-center h-12 bg-yellow-500 mb-12 px-12 "}>
            <ul className={"flex gap-10"}>
                <li><Link to={"/"}>Components</Link></li>
                <li><Link to={"/charactercounter"}>Character Counter</Link></li>
            </ul>
        </header>
    );
};