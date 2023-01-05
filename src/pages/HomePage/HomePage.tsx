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
    <main>
      <Header />
      <button type='button' onClick={openForm}>+ Add New Pass</button>
      <PassProvider >
        <SearchBar />
        <PassList />
        <Modal isOpen={formOpen} onRequestClose={closeForm} appElement={document.getElementById('root') || undefined} contentLabel='new pass form' >
          <NewPassForm close={closeForm} />
        </Modal>
      </PassProvider>
    </main>
  )
}