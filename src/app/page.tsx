import logo from "@/assets/shopping-basket.png"
import { Providers } from "@/components/providers"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <header className="container flex p-4">
        <Image
          src={logo}
          alt="logo"
          className="h-auto w-8 xs:w-10 lg:w-12 xl:w-14"
        />
        <h1 className="xs:text-x2 p-2 text-xl font-medium lg:text-3xl xl:text-4xl">
          Shopping list
        </h1>
        <small className="flex-1 self-center">with ReactJS + ReduxJS</small>
        <ThemeToggle />
      </header>
      <main className="app-view container flex flex-1 flex-col">
        <Providers />
      </main>
    </>
  )
}
