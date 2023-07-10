import { FormEvent, useRef } from "react"

interface FormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function DesktopForm({ handleSubmit }: FormProps) {
  const itemRef = useRef<HTMLInputElement | null>(null)
  return (
    <form className='app_desktop_form' onSubmit={handleSubmit}>
      <label htmlFor='item-list'>Item: </label>
      <input
        id='item-list'
        ref={itemRef}
        type='text'
        placeholder='e.g.: rice'
        name='name'
        required
      />

      <label htmlFor='item-quantity'>Quantity: </label>
      <input
        id='item-quantity'
        type='number'
        placeholder='e.g.: 2'
        name='quantity'
        min={0}
        max={999}
      />
      <label htmlFor='item-price'>Price: </label>
      <input
        id='item-price'
        type='number'
        step='0.01' // allows two decimal places
        placeholder='e.g.: 30'
        name='price'
        min={0}
        max={1000000}
      />

      <div className='col-span-2 mx-4 flex justify-around gap-4'>
        <button
          className='w-20 rounded-full shadow-[0_0_0_2px_#bec0be] hover:shadow-focus-hover focus:shadow-focus-hover'
          type='submit'
          onClick={() => itemRef.current?.focus()}
        >
          Add
        </button>
        <button
          className='w-20 rounded-full shadow-[0_0_0_2px_#bec0be] hover:shadow-focus-hover focus:shadow-focus-hover'
          type='reset'
        >
          Clear
        </button>
      </div>
    </form>
  )
}
