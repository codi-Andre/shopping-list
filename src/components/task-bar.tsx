"use client"

import { useAppDispatch } from "@/store"
import { loadList, uncheckAll } from "@/store/slices/list"
import * as Popover from "@radix-ui/react-popover"
import { useEffect } from "react"
import { Form } from "./form"

export function TaskBar() {
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(loadList())
  }, [])

  return (
    <div className="container fixed bottom-6 flex justify-evenly rounded-t-3xl">
      <button
        onClick={() => dispatch(uncheckAll())}
        className="btn bg-primary px-4 shadow-btn-s active:shadow-btn-sa
       dark:bg-secondary dark:shadow-btn-p active:dark:shadow-btn-pa"
      >
        <span className="after:right-[-20px] after:content-['\2B1C']">
          uncheck all
        </span>
      </button>
      <Popover.Root>
        <Popover.Trigger asChild>
          <button
            className="btn bg-primary px-4 shadow-btn-s active:shadow-btn-sa
              dark:bg-secondary dark:shadow-btn-p active:dark:shadow-btn-pa"
          >
            <span className="after:right-[-20px] after:content-['\2795']">
              New item
            </span>
          </button>
        </Popover.Trigger>
        <Popover.Portal>
          <Popover.Content className="mb-1">
            <Form />
            <Popover.Close
              aria-label="close"
              className="absolute right-0 top-0 p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </Popover.Close>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mx-auto text-center"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </div>
  )
}
