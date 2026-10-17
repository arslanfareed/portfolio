import uniqid from 'uniqid'
import { experience } from '../../portfolio'
import '../Projects/Projects.css'
import '../ProjectContainer/ProjectContainer.css'
import './Experience.css'

const Experience = () => {
  if (!experience.length) return null

  return (
    <section id='experience' className='section experience'>
      <h2 className='section__title'>Experience</h2>

      <div className='projects__grid'>
        {experience.map((job) => (
          <div key={uniqid()} className='project experience__item'>
            <h3>{job.company}</h3>
            <p className='experience__role'>{job.role}</p>
            <p className='experience__period'>{job.period}</p>
            <ul className='experience__highlights'>
              {job.highlights.map((item) => (
                <li key={uniqid()}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Experience
