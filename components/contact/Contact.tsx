import Image from "next/image";
import logoIcon from "../atoms/navbar/logoNavbar.png"

const Contact = () => {
    return(
        <div className="md:ml-40 md:flex md:items-start py-10">
            <div className="md:ml-40 mt-20 md:mt-0">
                <h2 className="text-violet-600 text-6xl md:text-8xl">Contact</h2>
                <div className="mt-16">
                    <p><span className="font-bold">Email:</span> email@logicel.com</p>
                    <p className="mt-8"><span className="font-bold">Phone Number:</span> +00 200 000 000</p>
                </div>
            </div>
            <div className="w-10 h-10">
                <iframe
                    className="w-full"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5985.8507697359355!2d2.1738442931721718!3d41.39742675294965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2dcd83dfb93%3A0x9bd8aac21bc3c950!2sBas%C3%ADlica%20de%20la%20Sagrada%20Fam%C3%ADlia!5e0!3m2!1ses!2ses!4v1652942799259!5m2!1ses!2ses"
                    loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Contact