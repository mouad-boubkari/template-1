import {useState} from "react";
import { MenuIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/solid'
import logoIcon from "../atoms/navbar/logoNavbar.png"
import Image from "next/image";

const Navbar = () => {
    const Links = [
        {name: "HOME", link: "#"},
        {name: "DESCRIPTION", link: "#"},
        {name: "PRODUCTS", link: "#"},
        {name: "CONTACTS", link: "#"},
    ];
    let [open, setOpen] = useState(false);
    return (
        <div className="w-full fixed top-0 left-0 z-50">
            <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
                <div className="flex items-center text-2xl cursor-pointer text-violet-600">
                    <Image src={logoIcon} width={35} height={35}/>
                    <span className="text-violet-600">
                        Logiciel
                    </span>
                </div>

                <div onClick={() => setOpen(!open)}
                     className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
                    <MenuIcon className="h-10 w-10 flex items-center justify-center hover:text-violet-600 duration-500"/>
                </div>

                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-20" : "top-[-490px]"}`}>
                    {
                        Links.map((link) => (
                            <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link}
                                   className="hover:text-violet-600 duration-500">{link.name}</a>
                            </li>
                        ))
                    }
                </ul>

                <div>
                    <SearchIcon className="h-5 w-5 flex items-center justify-center hover:text-violet-600 duration-500 invisible md:visible"/>
                </div>
            </div>
        </div>
    )
}

export default Navbar