import uniqid from 'uniqid'
import { education } from '../../portfolio'
import '../Projects/Projects.css'
import '../ProjectContainer/ProjectContainer.css'

const Education = () => {
  if (!education.length) return null

  return (
    <section id='education' className='section education'>
      <h2 className='section__title'>Education</h2>

      <div className='projects__grid'>
        {education.map((item) => (
          <div key={uniqid()} className='project'>
            <h3>{item.degree}</h3>
            <p className='project__description'>{item.institution}</p>
            <p className='project__stack-item'>{item.period}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
