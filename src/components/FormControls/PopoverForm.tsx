import { FormEvent, useRef } from "react"
import * as Popover from "@radix-ui/react-popover"
import { X } from "lucide-react"

interface FormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void
}

export function PopoverForm({ handleSubmit }: FormProps) {
  const itemRef = useRef<HTMLInputElement>(null)

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button
          className='mb-4 mt-2 h-10 min-w-[120px] rounded-full bg-green-malachite hover:bg-green-malachiteDark dark:bg-green-malachiteDark hover:dark:bg-green-800'
          aria-label='add new item'
        >
          new item
        </button>
      </Popover.Trigger>
      <Popover.Anchor />
      <Popover.Portal>
        <Popover.Content
          onOpenAutoFocus={(e) => {
            e.preventDefault()
            itemRef.current?.focus()
          }}
          side='top'
          sideOffset={64}
          className='flex flex-col rounded-lg border-2 border-solid border-white-silver bg-white-babyPowder text-black-night dark:bg-black-night dark:text-white-babyPowder'
        >
          <Popover.Close className='self-end p-1 active:bg-transparent active:text-red-accent'>
            <X size={20} />
          </Popover.Close>
          <form className='app_popover_form' onSubmit={handleSubmit}>
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

            <div className='col-span-2 flex justify-around'>
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
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  )
}
