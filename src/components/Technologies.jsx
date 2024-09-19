import { SiReact, SiLit, SiHtml5, SiJavascript, SiCypress, SiTailwindcss, SiSpring, SiPostgresql, SiMicrosoftsqlserver} from "react-icons/si";
import { FaSass, FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

export const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Tools & Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="p-4">
                    <SiReact className='text-7xl text-cyan-400' />
                </div>
                <div className="p-4">
                    <SiLit className='text-7xl text-blue-600' />
                </div>
                <div className="p-4">
                    <SiHtml5 className='text-7xl text-orange-500' />
                </div>
                <div className="p-4">
                    <SiJavascript className='text-7xl text-yellow-400' />
                </div>
                <div className="p-4">
                    <FaSass className='text-7xl text-pink-500' />
                </div>
                <div className="p-4">
                    <SiCypress  className='text-7xl' />
                </div>
                <div className="p-4">
                    <SiTailwindcss  className='text-7xl text-green-700' />
                </div>
                <div className="p-4">
                    <SiSpring className='text-7xl text-green-500' />
                </div>
                <div className="p-4">
                    <FaJava className='text-7xl text-red-600' />
                </div>
                <div className="p-4">
                    <SiPostgresql className='text-7xl text-sky-700' />
                </div>
                <div className="p-4">
                    <DiMysql className='text-7xl text-gray-400' />
                </div>
                <div className="p-4">
                    <SiMicrosoftsqlserver className='text-7xl text-red-500' />
                </div>
            </div>
        </div>
    )
}
