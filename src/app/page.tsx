'use client'

import { FormEvent, useRef, useState } from 'react'

interface ListItemData {
  [index: string]: string | number

  name: string
  quantity: number
  price: number
}

interface InputData {
  current: {
    value: ''
  }
}

export default function Home() {
  const itemRef = useRef<HTMLInputElement>(null)
  const quantityRef = useRef<HTMLInputElement>(null)
  const priceRef = useRef<HTMLInputElement>(null)
  const [list, setList] = useState<ListItemData[]>([])

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    const listItem = Object.fromEntries(formData.entries()) as ListItemData

    setList(list => [...list, { ...listItem }])
    itemRef.current!.value = ''
    quantityRef.current!.value = ''
    priceRef.current!.value = ''
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
          className="rounded-md border-2 border-solid border-yellow-7 bg-yellow-5 p-2 hover:bg-yellow-7"
          type="submit"
        >
          Add
        </button>
        <button
          className="rounded-md border-2 border-solid border-yellow-7 bg-yellow-5 p-2 hover:bg-yellow-7"
          type="reset"
        >
          Cancel
        </button>
      </form>
    </main>
  )
}
