import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { ToggleDarkMode } from '@/components/ToggleDarkMode'

export default function Home() {
  return (
    <ToggleDarkMode>
      <Header />
      <Main />
    </ToggleDarkMode>
  )
}
