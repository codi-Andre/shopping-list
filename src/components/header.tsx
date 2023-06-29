import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className='relative flex min-h-[8rem] items-center justify-around gap-8 rounded-md bg-black-night p-4 text-gray-lavenderLight dark:bg-gray-lavenderLight dark:text-black-night'>
      <h1 className='text-4xl'>Shopping List WebApp</h1>

      <p className='max-w-[11rem]'>
        Plan ahead results in time save and better prices
      </p>

      <ThemeToggle />
    </header>
  )
}
