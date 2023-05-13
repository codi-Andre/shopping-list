'use client'

import { Trash } from 'lucide-react'
import { FormEvent, useEffect, useRef, useState } from 'react'

interface ListItemData {
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
    <main className="flex flex-col gap-4 p-4">
      <h2 className="text-3xl">Quick List</h2>

      <ul className="list-inside list-disc">
        {list.map((item, index) => {
          return (
            <li
              key={`${item.name}-${index}`}
              className="list-item border-b-2 border-solid border-yellow-7"
            >
              <span>{item.name}</span>
              <span>{item.quantity}</span>
              <span>{item.price}</span>
              <button
                title="delete item"
                onClick={() => deleteItem(item, index)}
              >
                <Trash />
              </button>
            </li>
          )
        })}
      </ul>

      <form onSubmit={handleSubmit} className="flex justify-center gap-4">
        <input
          className="rounded-md bg-yellow-5 p-2 placeholder:text-white"
          ref={itemRef}
          type="text"
          placeholder="Item name"
          name="name"
        />

        <input
          className="rounded-md bg-yellow-5 p-2 placeholder:text-white"
          ref={quantityRef}
          type="number"
          placeholder="Item quantity"
          name="quantity"
        />

        <input
          className="rounded-md bg-yellow-5 p-2 placeholder:text-white"
          ref={priceRef}
          type="number"
          step="0.01" // allows two decimal places
          placeholder="Item price"
          name="price"
        />

        <button
          className="min-w-[4rem] rounded-md border-2 border-solid border-yellow-7 bg-yellow-5 p-2 hover:bg-yellow-7"
          type="submit"
          onClick={() => itemRef.current?.focus()}
        >
          Add
        </button>
        <button
          className="min-w-[4rem] rounded-md border-2 border-solid border-yellow-7 bg-yellow-5 p-2 hover:bg-yellow-7"
          type="reset"
        >
          Clear
        </button>
      </form>
    </main>
  )
}
