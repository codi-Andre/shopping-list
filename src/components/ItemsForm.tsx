import { FormEvent, useRef } from "react"

interface DataProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function ItemsForm({ handleSubmit }: DataProps) {
  const itemRef = useRef<HTMLInputElement>(null)

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col items-center gap-4 self-center lg:flex-row'
    >
      <label className='rounded-md border-2 border-solid border-white-babyPowder bg-black-eerieBlack ps-2 text-white-babyPowder dark:border-black-jet dark:bg-white-whiteSmoke dark:text-black-night'>
        Item:{" "}
        <input
          className='rounded-r-md bg-black-eerieBlack p-2 text-white-babyPowder placeholder:text-gray-500 dark:bg-white-whiteSmoke dark:text-black-night dark:placeholder:text-gray-500'
          ref={itemRef}
          type='text'
          placeholder='e.g.: rice'
          name='name'
          required
        />
      </label>

      <label className='rounded-md border-2 border-solid border-white-babyPowder bg-black-eerieBlack ps-2 text-white-babyPowder dark:border-black-jet dark:bg-white-whiteSmoke dark:text-black-night'>
        Quantity:{" "}
        <input
          className='max-w-[8rem] rounded-r-md bg-black-eerieBlack p-2 text-white-babyPowder placeholder:text-gray-500 dark:bg-white-whiteSmoke dark:text-black-night dark:placeholder:text-gray-500'
          type='number'
          placeholder='e.g.: 2'
          name='quantity'
          min={0}
          max={999}
        />
      </label>
      <label className='rounded-md border-2 border-solid border-white-babyPowder bg-black-eerieBlack ps-2 text-white-babyPowder dark:border-black-jet dark:bg-white-whiteSmoke dark:text-black-night'>
        Price:{" "}
        <input
          className='max-w-[8rem] rounded-r-md bg-black-eerieBlack p-2 text-white-babyPowder placeholder:text-gray-500 dark:bg-white-whiteSmoke dark:text-black-night dark:placeholder:text-gray-500'
          type='number'
          step='0.01' // allows two decimal places
          placeholder='e.g.: 30'
          name='price'
          min={0}
          max={1000000}
        />
      </label>

      <div className='flex gap-4'>
        <button
          className='h-[2.625rem] min-w-[4rem] flex-1 rounded-md border-2 border-solid border-white-babyPowder bg-black-eerieBlack p-1 text-white-babyPowder hover:border-black-eerieBlack dark:border-black-jet dark:bg-white-whiteSmoke dark:text-black-night dark:hover:border-white-babyPowder'
          type='submit'
          onClick={() => itemRef.current?.focus()}
        >
          Add
        </button>
        <button
          className='h-[2.625rem] min-w-[4rem] flex-1 rounded-md border-2 border-solid border-white-babyPowder bg-black-eerieBlack p-1 text-white-babyPowder hover:border-black-eerieBlack dark:border-black-jet dark:bg-white-whiteSmoke dark:text-black-night dark:hover:border-white-babyPowder'
          type='reset'
        >
          Clear
        </button>
      </div>
    </form>
  )
}
