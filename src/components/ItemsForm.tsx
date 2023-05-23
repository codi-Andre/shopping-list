import { FormEvent, useRef } from 'react'

interface DataProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function ItemsForm({
  handleSubmit,
}: DataProps) {
  const itemRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col flex-nowrap items-center gap-4 self-center lg:flex-row"
    >
      <label className="rounded-md border-2 border-solid border-white bg-brown-5 ps-2">
        Item:{' '}
        <input
          className="rounded-r-md bg-brown-7 p-2 placeholder:text-brown-1"
          ref={itemRef}
          type="text"
          placeholder="e.g.: rice"
          name="name"
          required
        />
      </label>

      <label className="rounded-md border-2 border-solid border-white bg-brown-5 ps-2">
        Quantity:{' '}
        <input
          className="rounded-r-md bg-brown-7 p-2 placeholder:text-brown-1"
          type="number"
          placeholder="e.g.: 2"
          name="quantity"
        />
      </label>
      <label className="rounded-md border-2 border-solid border-white bg-brown-5 ps-2">
        Price:{' '}
        <input
          className="rounded-r-md bg-brown-7 p-2 placeholder:text-brown-1"
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
  )
}
