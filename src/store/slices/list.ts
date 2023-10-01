import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid/non-secure"
import { formatUserInput } from "./list.utils"

export interface Product {
  id: string
  name: string
  quantity?: number
  price: number
  checked: boolean
}

interface ListState {
  items: Product[]
  marked: number
  total: number
  isLoading: boolean
}

const initialState: ListState = {
  items: [],
  marked: 0,
  total: 0,
  isLoading: false
}

export const loadList = createAsyncThunk("list/load", async () => {
  const delay = new Promise<string>((resolve) => setTimeout(resolve, 2000))
  await delay

  const data = JSON.parse(
    localStorage.getItem("shopping-list-redux:state-1.0") || ""
  )
  if (!data) return [] as Product[]

  return data as Product[]
})

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Record<string, string>>) => {
      const userInput = formatUserInput(action.payload)

      const newProduct = {
        id: nanoid(),
        name: userInput.name || "Invalid",
        quantity: userInput.quantity || 1,
        price: userInput.price || 0,
        checked: false
      }

      state.items = [...state.items, newProduct]
      state.total = state.total + newProduct.price

      localStorage.setItem(
        "shopping-list-redux:state-1.0",
        JSON.stringify(state.items)
      )
    },
    remove: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      )
      state.total = state.total - action.payload.price

      if (action.payload.checked) {
        state.marked = state.marked - action.payload.price
      }

      localStorage.setItem(
        "shopping-list-redux:state-1.0",
        JSON.stringify(state.items)
      )
    },
    mark: (state, action: PayloadAction<string>) => {
      const value = state.items.findIndex(
        (product) => product.id === action.payload
      )

      if (value < 0) {
        return
      }

      state.items[value].checked = !state.items[value].checked

      if (state.items[value].checked) {
        state.marked = state.marked + state.items[value].price
      } else {
        state.marked = state.marked - state.items[value].price
      }

      localStorage.setItem(
        "shopping-list-redux:state-1.0",
        JSON.stringify(state.items)
      )
    }
  },
  extraReducers(builder) {
    builder.addCase(loadList.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(loadList.fulfilled, (state, action) => {
        const marked = action.payload.reduce(
          (acc, cur) => (cur.checked ? acc + cur.price : acc),
          0
        )
        const total = action.payload.reduce((acc, cur) => acc + cur.price, 0)

        state.isLoading = false
        state.items = action.payload
        state.marked = marked
        state.total = total
      })
  }
})

export const list = listSlice.reducer
export const { add, mark, remove } = listSlice.actions
