import Image from "next/image";
import logoIcon from "../atoms/navbar/logoNavbar.png"

const Description = () => {
    return (
        <div className="mt-80 flex bg-white">
            <div className="w-full md:w-2/4 ml-5 md:ml-40">
                <div>
                    <h2 className="text-6xl md:text-8xl">
                        Software For The Open <span className="text-violet-600">Enterprise.</span>
                    </h2>
                </div>
                <div className="w-3/4 mt-16">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquam assumenda
                        consequuntur culpa eaque eum excepturi itaque iusto libero minima necessitatibus, nemo nostrum
                        nulla obcaecati perferendis sequi soluta veniam voluptas!
                    </p>
                </div>
                <div className="mt-16">
                    <a href="#">
                        <button className="bg-violet-600 rounded-lg w-40 h-12 text-white">Request A Demo</button>
                    </a>
                </div>
            </div>
            <div className="z-[-1] md:z-auto">
                <div>
                    <Image src={logoIcon}/>
                </div>
            </div>
        </div>
    )
}

export default Description