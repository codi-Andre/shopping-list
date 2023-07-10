import { FormEvent, useEffect, useState } from "react"
import { DesktopForm } from "./DesktopForm"
import { PopoverForm } from "./PopoverForm"

interface RenderFormProps {
  handleForm: (e: FormEvent<HTMLFormElement>) => void
}

export function RenderForm({ handleForm }: RenderFormProps) {
  const [width, setWidth] = useState(0)
  const breakpoint = 1024

  useEffect(() => {
    const onPageLoad = () => {
      setWidth(window.innerWidth)
    }
    // Check if the page has already loaded
    if (document.readyState === "complete") {
      onPageLoad()
    } else {
      window.addEventListener("load", onPageLoad)
      // Remove the event listener when component unmounts
      return () => window.removeEventListener("load", onPageLoad)
    }
  }, [])

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    // subscribe to window resize event "onComponentDidMount"
    window.addEventListener("resize", handleResizeWindow)
    return () => {
      // unsubscribe "onComponentDestroy"
      window.removeEventListener("resize", handleResizeWindow)
    }
  }, [])

  if (width > breakpoint) {
    return <DesktopForm handleSubmit={handleForm} />
  }
  return <PopoverForm handleSubmit={handleForm} />
}
