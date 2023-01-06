import { useState } from 'react'
import Modal from 'react-modal'
import Header from '../../components/Header/Header'
import NewPassForm from '../../components/NewPassForm/NewPassForm'
import PassList from '../../components/PassList/PassList'
import SearchBar from '../../components/SearchBar/SearchBar'
import PassProvider from '../../context/PassProvider'
import './HomePage.scss'

export default function HomePage() {

  const [formOpen, setFormOpen] = useState<boolean>(false)


  const openForm = (): void => {
    setFormOpen(true)
  }
  const closeForm = (): void => {
    setFormOpen(false)
  }

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
    </main>
  )
}