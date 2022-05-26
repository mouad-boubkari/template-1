import Image from "next/image";
import imageProduct1 from "../atoms/icons/broccoli-cabbage-health-svgrepo-com.svg"
import imageProduct2 from "../atoms/icons/broccoli-health-salad-svgrepo-com.svg"
import imageProduct3 from "../atoms/icons/chili-fruit-spicy-svgrepo-com.svg"
import imageProduct4 from "../atoms/icons/fruit-tomato-vegetables-svgrepo-com.svg"
import imageProduct5 from "../atoms/icons/leaf-salad-seasoning-svgrepo-com.svg"
import imageProduct6 from "../atoms/icons/pumpkin-salad-vegetables-svgrepo-com.svg"


const Products = () => {
    return(
        <div className="mt-80 md:flex">
            <div className="md:w-3/5 md:flex ml-40 md:flex-col items-center">
                <div className="md:flex">
                    <div className="md:mr-52 mt-20 md:mt-0">
                        <Image src={imageProduct1} width={80} height={80}/>
                        <p>Live Chat</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0">
                        <Image src={imageProduct2} width={80} height={80}/>
                        <p>Reports</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0">
                        <Image src={imageProduct3} width={80} height={80}/>
                        <p>Chat APIs</p>
                    </div>
                </div>
                <div className="md:flex md:mt-20">
                    <div className="md:mr-52 mt-20 md:mt-0">
                        <Image src={imageProduct4} width={80} height={80}/>
                        <p>Secure</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0">
                        <Image src={imageProduct5} width={80} height={80}/>
                        <p>Returns</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0">
                        <Image src={imageProduct6} width={80} height={80}/>
                        <p>Channeis</p>
                    </div>
                </div>
            </div>
            <div className="mt-20 md:mt-0">
                <div>
                    <h2 className="text-6xl md:text-8xl">Discover Ort <span className="text-violet-600">Features.</span></h2>
                </div>
                <div className="w-3/4 mt-16">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam assumenda at dicta facilis iusto minima mollitia neque nesciunt.</p>
                </div>
                <div className="mt-16">
                    <a href="#">
                        <button className="bg-violet-600 rounded-lg w-40 h-12 text-white">Request A Demo</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Products