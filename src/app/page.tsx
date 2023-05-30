import { Header } from '@/components/Header'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <div className='app overflow-scroll bg-brown-Vanilla p-4 text-brown-blackBean dark:bg-brown-blackBean dark:text-brown-Vanilla md:px-4 md:py-8'>
      <Header />
      <Main />
    </div>
  )
}
