import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
// import ProjectScreen from './canvas/ProjectScreen';

const ProjectCard = ({index, project}) => {

  const tags = project.tags;
  return (
    <motion.div
      variants={fadeIn("up", "spring", index*0.5, 0.75)}
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer"
      >
        <div 
          className='relative w-full h-[230px]'
          onClick={() => window.open(project.source_code_link, "_blank")}
        >
          <img src={project.image} alt={project.name} className='w-full h-full object-cover rounded-2xl' />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center curson-pointer'
            >
              <img
                src={github}
                alt='github'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{project.name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))

          }

        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}
      >
        <p className={styles.sectionSubText}>What I have created so far</p>
        <h2 className={styles.heroHeadText}>My Works</h2>
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard
            key={`project-${index}`}
            index={index}
            project={project}
          />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, 'projects');