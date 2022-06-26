const Hero = () => {
    return(
        <div className="grid col-auto justify-center py-40">
            <div className="mx-80">
                <h1 className="text-6xl md:text-9xl md:text-center"><span className="text-violet-600">Logicel</span> It's All About The Customer.</h1>
            </div>
            <div className="mx-96 mt-20">
                <p className="md:text-center text-justify">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci at eligendi error illum iure minus molestias pariatur, qui rerum vel? Blanditiis ex explicabo, minima pariatur possimus provident voluptates! Autem, similique.
                </p>
            </div>
            <div className="w-full flex justify-center mt-20">
                <a href="#"><button className="bg-violet-600 rounded-lg w-40 md:w-60 h-12 md:h-16 md:text-xl text-white">Request A Demo</button></a>
            </div>
        </div>
    )
}

export default Hero