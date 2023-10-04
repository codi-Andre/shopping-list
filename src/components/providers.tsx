"use client"

import { store } from "@/store"
import { Provider as ReduxProvider } from "react-redux"
import { ItemsTable } from "./items-table"
import { TaskBar } from "./task-bar"

export function Providers() {
  return (
    <ReduxProvider store={store}>
      <div className="data-table h-[90%] w-full overflow-auto px-2 lg:h-[85%] xl:h-[80%]">
        <ItemsTable />
      </div>
      <TaskBar />
    </ReduxProvider>
  )
}
