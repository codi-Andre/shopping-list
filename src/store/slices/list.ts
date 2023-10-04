import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { nanoid } from "nanoid/non-secure"
import { formatUserInput } from "./list.utils"

export interface Product {
  id: string
  name: string
  quantity: number
  price: number
  checked: boolean
}

interface ListState {
  items: Product[]
  itemsChecked: number
  total: number
  isLoading: boolean
}

const initialState: ListState = {
  items: [],
  itemsChecked: 0,
  total: 0,
  isLoading: false
}

export const loadList = createAsyncThunk("list/load", async () => {
  const delay = new Promise((resolve) => setTimeout(resolve, 1000))
  await delay

  const data = JSON.parse(
    localStorage.getItem("shopping-list-redux:state-1.0") || "[]"
  )

  if (!data || data.length === 0 || data === null) {
    return [
      {
        id: "exampleItem1",
        name: "Milk",
        quantity: 3,
        price: 5.6,
        checked: false
      },
      {
        id: "exampleItem2",
        name: "Eggs",
        quantity: 12,
        price: 0.43,
        checked: true
      },
      {
        id: "exampleItem3",
        name: "Flour",
        quantity: 1,
        price: 7,
        checked: false
      }
    ]
  }

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
      state.total = state.total + newProduct.price * newProduct.quantity

      localStorage.setItem(
        "shopping-list-redux:state-1.0",
        JSON.stringify(state.items)
      )
    },
    remove: (state, action: PayloadAction<Product>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload.id
      )
      state.total = state.total - action.payload.price * action.payload.quantity

      if (action.payload.checked) {
        state.itemsChecked =
          state.itemsChecked - action.payload.price * action.payload.quantity
      }

      localStorage.setItem(
        "shopping-list-redux:state-1.0",
        JSON.stringify(state.items)
      )
    },
    checkItem: (state, action: PayloadAction<string>) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload
      )

      if (index < 0) {
        return
      }

      state.items[index].checked = !state.items[index].checked

      if (state.items[index].checked) {
        state.itemsChecked =
          state.itemsChecked +
          state.items[index].price * state.items[index].quantity
      } else {
        state.itemsChecked =
          state.itemsChecked -
          state.items[index].price * state.items[index].quantity
      }

      localStorage.setItem(
        "shopping-list-redux:state-1.0",
        JSON.stringify(state.items)
      )
    },
    uncheckAll: (state) => {
      state.itemsChecked = 0
      state.items = state.items.map((product) => {
        product.checked = false

        return product
      })
    }
  },
  extraReducers(builder) {
    builder.addCase(loadList.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(loadList.fulfilled, (state, action) => {
        const checked = action.payload.reduce(
          (acc, cur) => (cur.checked ? acc + cur.price * cur.quantity : acc),
          0
        )
        const total = action.payload.reduce(
          (acc, cur) => acc + cur.price * cur.quantity,
          0
        )

        state.items = action.payload
        state.itemsChecked = checked
        state.total = total
        state.isLoading = false
      })
  }
})

export const list = listSlice.reducer
export const { add, checkItem, uncheckAll, remove } = listSlice.actions
