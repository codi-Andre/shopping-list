'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { Trash } from 'lucide-react'

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
    <main className="mt-2 flex flex-col gap-4">
      <h2 className="text-center text-3xl">Quick List</h2>
      <table className="data_table">
        <thead>
          <tr>
            <th scope="col">Items</th>
            <th scope="col">quantity</th>
            <th scope="col">price</th>
            <th scope="col">total</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={`${item}-${index}`}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.price}</td>
                <td>{`${item.price * item.quantity}`}</td>
                <td className="max-w-[8px]">
                  <button
                    title="Delete item"
                    onClick={() => deleteItem(item, index)}
                  >
                    <Trash color="red"></Trash>
                  </button>
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col flex-nowrap items-center gap-4 lg:flex-row"
      >
        <label className="rounded-md border-2 border-solid border-white bg-brown-5 ps-2">
          Item:{' '}
          <input
            className="rounded-r-md bg-brown-7 p-2 placeholder:text-brown-1"
            ref={itemRef}
            type="text"
            placeholder="e.g.: rice"
            name="name"
          />
        </label>

        <label className="rounded-md border-2 border-solid border-white bg-brown-5 ps-2">
          Quantity:{' '}
          <input
            className="rounded-r-md bg-brown-7 p-2 placeholder:text-brown-1"
            ref={quantityRef}
            type="number"
            placeholder="e.g.: 2"
            name="quantity"
          />
        </label>
        <label className="rounded-md border-2 border-solid border-white bg-brown-5 ps-2">
          Price:{' '}
          <input
            className="rounded-r-md bg-brown-7 p-2 placeholder:text-brown-1"
            ref={priceRef}
            type="number"
            step="0.01" // allows two decimal places
            placeholder="e.g.: 30"
            name="price"
          />
        </label>

        <div className="flex gap-4">
          <button
            className="h-[2.625rem] min-w-[4rem] flex-1 rounded-md border-2 border-solid bg-brown-7 p-1 hover:bg-brown-5"
            type="submit"
            onClick={() => itemRef.current?.focus()}
          >
            Add
          </button>
          <button
            className="h-[2.625rem] min-w-[4rem] flex-1 rounded-md border-2 border-solid bg-brown-7 p-1 hover:bg-brown-5"
            type="reset"
          >
            Clear
          </button>
        </div>
      </form>
    </main>
  )
}
