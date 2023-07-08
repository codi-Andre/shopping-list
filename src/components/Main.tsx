"use client"

import { FormEvent, useEffect, useState } from "react"
import { PopoverForm } from "./PopoverForm"
import { ItemsTable } from "./ItemsTable"
import { ListItemData } from "@/entities/listItem"
import { nanoid } from "nanoid"

export function Main() {
  const [list, setList] = useState<ListItemData[]>([])

  useEffect(() => {
    const localList = localStorage.getItem("@shopping-list:state-1.0.0")
    if (localList) {
      setList([...JSON.parse(localList)])
    }
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const listItem = Object.fromEntries(formData.entries()) as ListItemData
    listItem.id = nanoid()

    const updateList = [...list, { ...listItem }] // save in local storage before re-render
    localStorage.setItem(
      "@shopping-list:state-1.0.0",
      JSON.stringify(updateList)
    )

    setList([...updateList])

    e.currentTarget.reset()
  }

  function deleteItem(itemId: string) {
    const updateList = list.filter((listItem) => listItem.id !== itemId)

    localStorage.setItem(
      "@shopping-list:state-1.0.0",
      JSON.stringify(updateList)
    )
    setList([...updateList])
  }

  return (
    <main className='app_content'>
      <ItemsTable state={list} deleteItem={deleteItem} />

      <PopoverForm handleSubmit={handleSubmit} />
    </main>
  )
}
