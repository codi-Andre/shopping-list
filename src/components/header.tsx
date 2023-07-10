import { ThemeToggle } from "./ThemeToggle"

export function Header() {
  return (
    <header className='relative flex min-h-[8rem] flex-1 items-center justify-around gap-6 bg-img-header bg-cover  bg-no-repeat p-4 text-white-babyPowder dark:text-black-night lg:mt-2  lg:rounded-lg'>
      <h1>Shopping List WebApp</h1>

      <p className='max-w-[11rem]'>
        Plan ahead results in time save and better prices
      </p>

      <ThemeToggle />
    </header>
  )
}
