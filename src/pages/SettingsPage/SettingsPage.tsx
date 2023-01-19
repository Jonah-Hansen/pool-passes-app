import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import SettingsForm from '../../components/SettingsForm/SettingsForm'
import './SettingsPage.scss'

export default function SettingsPage() {
  return (
    <main>
      <Header type='settings' />
      <SettingsForm />
      <Footer />
    </main>
  )
}