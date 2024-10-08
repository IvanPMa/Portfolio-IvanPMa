import profilePic from "../assets/hero-ipm-color.webp"; 
import {HERO_CONTENT} from "../constants";

export const Hero = () => {
    return (
        <div className="pb-4 lg:mb-36">
            <div className="flex flex-wrap lg:flex-row-reverse">
                <div className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:p-8">
                        <img src={profilePic} alt="Ivan Pacheco" className=" border border-stone-900 rounded-3xl"></img>
                    </div>
                </div>

                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start mt-10">
                        <h2 className="pb-2 text-4xl tracking-tighter lg:text-8xl font-normal">
                            Ivan Pacheco    
                        </h2>
                        <span className="bg-gradient-to-r from-green-600 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent">Software Engineer</span>
                        <p className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
                            {HERO_CONTENT}
                        </p>
                        <a href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                            className="text-green-600 rounded-full p-4 text-lg mb-10"
                        >Download Resume / Curriculum Vitae </a>
                    </div>
                </div>
            </div>
        </div>

    )
}
