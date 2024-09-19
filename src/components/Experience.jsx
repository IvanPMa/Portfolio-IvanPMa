import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { motion } from "framer-motion";
import 'react-vertical-timeline-component/style.min.css';

import { styles } from "../styles";
import { EXPERIENCES } from "../constants";
import { SectionWrapper } from "../hoc"
import { textVariant } from '../utils/motion'

const ExperienceCard = (({experience})=>(
    <VerticalTimelineElement
        contentStyle={{background: '#1d1836', color: '#fff'}}
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
            <p>{experience.company}</p>

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