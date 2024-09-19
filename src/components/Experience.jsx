import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc"
import { textVariant } from '../utils/motion'

const ExperienceCard = (({experience})=>(
    <VerticalTimelineElement
        contentStyle={{background: 'transparent', color: '#fff'}}
        contentArrowStyle={{ borderRight: '7px solid #232631'}}
        date = {experience.year}
        iconStyle={{ background: experience.iconBg}}
        icon={
            <div className="flex justify-center items-center w-full h-full">
                <img 
                    className="rounded-full w-[80%] h-[80%] object-contain"
                    src={experience.icon}
                    alt={experience.company} />
            </div>
        }
    >
        <div>
            <h3 className="text-white text-[24px] font-bold">
                {experience.role}
            </h3>
            <p className="text-secondary text-[16px] font-semibold"
                style={{margin: 0}}>{experience.company}</p>
        </div>

        <ul className="mt-5 list-disc ml-5 space-y-2">
            {experience.points.map((point,index) => (
                <li
                    key={`experience-point-${index}`}
                    className="text-white-100 text-[14px] pl-1 tracking-wider"
                >
                    {point}
                </li>
            ))}
        </ul>
            
        <div className="mt-4 flex flex-wrap">
            {experience.technologies.map((tech,index) =>(
                <span className="mr-2 mt-4 rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300" key={`experience-tech-${index}`}>
                    {tech}
                </span>
            ))}
        </div>
    </VerticalTimelineElement>
))

export const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>What I have done so far</p>
                <h2 className={styles.sectionHeadText}>Work Experience.</h2>
            </motion.div>

            <div className="mt-20 flex flex-col">
                <VerticalTimeline>
                    {EXPERIENCES.map((experience, index)=>(
                        <ExperienceCard key={index} experience={experience}/>
                    ))}
                </VerticalTimeline>
            </div>
        </>
    )
}

export default SectionWrapper(Experience, "work");