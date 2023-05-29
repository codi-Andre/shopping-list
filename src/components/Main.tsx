'use client'

import { FormEvent, useEffect, useState } from 'react'
import { ItemsForm } from './ItemsForm'
import { ItemsTable } from './ItemsTable'
import { ListItemData } from '@/entities/listItem'

export function Main() {
  const [list, setList] = useState<ListItemData[]>([])

  useEffect(() => {
    const localList = localStorage.getItem('@shopping-list:state-1.0.0')
    if (localList) {
      setList([...JSON.parse(localList)])
    }
  }, [])

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget
    const formData = new FormData(form)
    const listItem = Object.fromEntries(formData.entries()) as ListItemData

    const updateList = [...list, { ...listItem }] // save in local storage before re-render
    localStorage.setItem(
      '@shopping-list:state-1.0.0',
      JSON.stringify(updateList)
    )

    setList([...updateList])

    e.currentTarget.reset()
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
    <main className='mt-2 flex flex-col gap-4'>
      <h2 className='text-center text-3xl'>Quick List</h2>

      <ItemsTable state={list} deleteItem={deleteItem} />

      <ItemsForm handleSubmit={handleSubmit} />
    </main>
  )
}
