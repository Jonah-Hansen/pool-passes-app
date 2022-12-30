import { useState } from 'react'
import Modal from 'react-modal'
import Header from '../../components/Header/Header'
import NewPassForm from '../../components/NewPassForm/NewPassForm'
import PassList from '../../components/PassList/PassList'
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
      <PassList />
      <Modal isOpen={formOpen} onRequestClose={closeForm} appElement={document.getElementById('root') || undefined} contentLabel='new pass form' >
        <NewPassForm close={closeForm} />
      </Modal>
    </main>
  )
}