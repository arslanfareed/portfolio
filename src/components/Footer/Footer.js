import { about } from '../../portfolio'
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a href={about.social.linkedin} className='link footer__link'>
      &copy; {new Date().getFullYear()} {about.name}
    </a>
  </footer>
)

export default Footer
