import Header from '../../components/Header/Header'
import NewPassForm from '../../components/NewPassForm/NewPassForm'
import PassList from '../../components/PassList/PassList'
import './HomePage.scss'

export default function HomePage() {
  return (
    <main>
      <Header />
      <NewPassForm />
      <PassList />
    </main>
  )
}