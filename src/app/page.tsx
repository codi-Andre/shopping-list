'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { ItemsTable } from './components/ItemsTable'
import { ItemsForm } from './components/ItemsForm'

export interface ListItemData {
  [index: string]: string | number

  name: string
  quantity: number
  price: number
}

export default function Home() {
  const itemRef = useRef<HTMLInputElement>(null)
  const quantityRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)

  const [list, setList] = useState<ListItemData[]>([])

  useEffect(() => {
    const localList = localStorage.getItem('@shopping-list:state-1.0.0')
    if (localList) {
      setList([...JSON.parse(localList)])
    }
  }, [])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const listItem = Object.fromEntries(formData.entries()) as ListItemData

    const updateList = [...list, { ...listItem }] //save in local storage before re-render
    localStorage.setItem(
      '@shopping-list:state-1.0.0',
      JSON.stringify(updateList)
    )

    setList([...updateList])

    itemRef.current!.value = ''
    quantityRef.current!.value = ''
    priceRef.current!.value = ''
  }

  function deleteItem(item: ListItemData, index: number) {
    const updateList = list.filter(
      (listItem, i) => listItem.name !== item.name && i !== index
    )

    localStorage.setItem(
      '@shopping-list:state-1.0.0',
      JSON.stringify(updateList)
    )
    setList([...updateList])
  }

  return (
    <main className="mt-2 flex flex-col gap-4">
      <h2 className="text-center text-3xl">Quick List</h2>

      <ItemsTable state={list} deleteItem={deleteItem} />

      <ItemsForm
        itemRef={itemRef}
        quantityRef={quantityRef}
        priceRef={priceRef}
        handleSubmit={handleSubmit}
      />
    </main>
  )
}
