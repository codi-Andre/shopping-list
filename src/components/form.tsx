"use client"

import { useAppDispatch } from "@/store"
import { add } from "@/store/slices/list"
import { FormEvent } from "react"

export function Form() {
  const dispatch = useAppDispatch()

  function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const form = e.target as HTMLFormElement
    const formData = new FormData(form).entries()
    const formJson = Object.fromEntries(formData) as Record<string, string>

    dispatch(add(formJson))

    form.reset()
  }

  return (
    <form
      className="grid max-w-xs grid-cols-[min-content_minmax(0px,_1fr)] gap-2 rounded-lg bg-slate-200 px-10
       pb-3 pt-12 dark:bg-neutral-900"
      onSubmit={handleSubmit}
    >
      <label htmlFor="product-form-name">Name:</label>
      <input
        type="text"
        name="name"
        id="product-form-name"
        minLength={2}
        maxLength={28}
        required
        autoComplete="off"
      />

      <label htmlFor="product-form-quantity">Quantity:</label>
      <input type="number" name="quantity" id="product-form-quantity" min={1} />

      <label htmlFor="product-form-price">Price:</label>
      <input
        type="number"
        name="price"
        id="product-form-price"
        min={0}
        step={0.01}
        required
      />
      <div className="col-span-2 mt-2 flex justify-evenly">
        <button className="btn bg-background py-1" type="submit">
          Add
        </button>
        <button className="btn bg-background py-1" type="reset">
          Clear
        </button>
      </div>
    </form>
  )
}
