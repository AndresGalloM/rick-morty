import { Link } from 'react-router-dom'
import { HeartIcon } from '../Icons'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <HeartIcon size={18} />
      <p>
        Made by{' '}
        <Link
          to={'https://github.com/andresgallom'}
          target='_blank'
          // style={{ color: 'yellow', textDecoration: 'underline' }}
        >
          Andres
        </Link>
      </p>
    </footer>
  )
}

export default Footer
