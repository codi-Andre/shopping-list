import { FormEvent, useRef } from 'react'

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
      <label className='rounded-md border-2 border-solid border-brown-bronze bg-brown-blackBean ps-2 text-brown-Vanilla dark:border-brown-bloodRed dark:bg-brown-Vanilla dark:text-brown-blackBean'>
        Item:{' '}
        <input
          className='rounded-r-md bg-brown-blackBean p-2 text-brown-Vanilla placeholder:text-brown-bronze dark:bg-brown-Vanilla dark:text-brown-blackBean dark:placeholder:text-brown-bronze'
          ref={itemRef}
          type='text'
          placeholder='e.g.: rice'
          name='name'
          required
        />
      </label>

      <label className='rounded-md border-2 border-solid border-brown-bronze bg-brown-blackBean ps-2 text-brown-Vanilla dark:border-brown-bloodRed dark:bg-brown-Vanilla dark:text-brown-blackBean'>
        Quantity:{' '}
        <input
          className='max-w-[8rem] rounded-r-md bg-brown-blackBean p-2 text-brown-Vanilla placeholder:text-brown-bronze dark:bg-brown-Vanilla dark:text-brown-blackBean dark:placeholder:text-brown-bronze'
          type='number'
          placeholder='e.g.: 2'
          name='quantity'
          min={0}
          max={999}
        />
      </label>
      <label className='rounded-md border-2 border-solid border-brown-bronze bg-brown-blackBean ps-2 text-brown-Vanilla dark:border-brown-bloodRed dark:bg-brown-Vanilla dark:text-brown-blackBean'>
        Price:{' '}
        <input
          className='max-w-[8rem] rounded-r-md bg-brown-blackBean p-2 text-brown-Vanilla placeholder:text-brown-bronze dark:bg-brown-Vanilla dark:text-brown-blackBean dark:placeholder:text-brown-bronze'
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
          className='h-[2.625rem] min-w-[4rem] flex-1 rounded-md border-2 border-solid border-brown-bronze bg-brown-blackBean p-1 text-brown-Vanilla hover:border-brown-blackBean dark:border-brown-bloodRed dark:bg-brown-Vanilla dark:text-brown-blackBean dark:hover:border-brown-Vanilla'
          type='submit'
          onClick={() => itemRef.current?.focus()}
        >
          Add
        </button>
        <button
          className='h-[2.625rem] min-w-[4rem] flex-1 rounded-md border-2 border-solid border-brown-bronze bg-brown-blackBean p-1 text-brown-Vanilla hover:border-brown-blackBean dark:border-brown-bloodRed dark:bg-brown-Vanilla dark:text-brown-blackBean dark:hover:border-brown-Vanilla'
          type='reset'
        >
          Clear
        </button>
      </div>
    </form>
  )
}
