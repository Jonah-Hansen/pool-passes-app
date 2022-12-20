import { MdArrowBack, MdHome, MdSettings } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom'
import './Header.scss'

interface HeaderProps {
  type?: string,
}

export default function Header({ type }: HeaderProps) {
  const navigate = useNavigate()
  return (
    <header className='header'>
      {type === 'settings' &&
        <button onClick={() => navigate(-1)}>
          <MdArrowBack />
        </button>
      }
      <h1>{type === 'settings' ? 'Settings' : 'Pool Passes'}</h1>
      <Link to={type === 'settings' ? '/' : '/settings'} className='header__link' >
        {type === 'settings' ? <MdHome /> : <MdSettings />}
      </Link>
    </header>
  )
}