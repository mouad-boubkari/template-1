import Image from "next/image";
import imageProduct from "../atoms/icons/ellipse.svg"


const Products = () => {
    return(
        <div className="mt-80 md:flex">
            <div className="md:w-3/5 md:flex ml-40 md:flex-col items-center">
                <div className="md:flex">
                    <div className="md:mr-52 mt-20 md:mt-0 text-center">
                        <Image src={imageProduct} width={80} height={80}/>
                        <p>Live Chat</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0 text-center">
                        <Image src={imageProduct} width={80} height={80}/>
                        <p>Reports</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0 text-center">
                        <Image src={imageProduct} width={80} height={80}/>
                        <p>Chat APIs</p>
                    </div>
                </div>
                <div className="md:flex md:mt-20">
                    <div className="md:mr-52 mt-20 md:mt-0 text-center">
                        <Image src={imageProduct} width={80} height={80}/>
                        <p>Secure</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0 text-center">
                        <Image src={imageProduct} width={80} height={80}/>
                        <p>Returns</p>
                    </div>
                    <div className="md:mr-52 mt-20 md:mt-0 text-center">
                        <Image src={imageProduct} width={80} height={80}/>
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