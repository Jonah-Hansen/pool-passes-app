import { useState } from 'react'
import { MdExpandLess } from 'react-icons/md'
import Modal from 'react-modal'
import Header from '../../components/Header/Header'
import NewPassForm from '../../components/NewPassForm/NewPassForm'
import PassList from '../../components/PassList/PassList'
import SearchBar from '../../components/SearchBar/SearchBar'
import PassProvider from '../../context/PassProvider'
import './HomePage.scss'

export default function HomePage() {

  const [formOpen, setFormOpen] = useState<boolean>(false)
  const [topButton, setTopButton] = useState<boolean>(false)

  const openForm = (): void => {
    setFormOpen(true)
  }
  const closeForm = (): void => {
    setFormOpen(false)
  }

  setInterval(() => {
    if (window.scrollY > 215) setTopButton(true)
    else setTopButton(false)
  }, 250)

  return (
    <main className='home-page'>
      <Header />
      <PassProvider >
        <div className='home-page__actions'>
          <SearchBar />
          <button type='button' onClick={openForm} className='new-pass-btn' >
            + Add New Pass
          </button>
        </div>
        <PassList />
        <Modal className='modal' overlayClassName='modal__overlay' isOpen={formOpen} onRequestClose={closeForm} appElement={document.getElementById('root') || undefined} contentLabel='new pass form' >
          <NewPassForm close={closeForm} />
        </Modal>
      </PassProvider>
      {topButton &&
        <button type='button' className='home-page__to-top' onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} >

          <MdExpandLess />
        </button>
      }
    </main>
  )
}