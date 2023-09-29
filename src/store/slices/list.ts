import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"

interface Product {
  id: string
  name: string
  quantity?: number
  price: number
  category?: string
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
  let delay
  const response = await new Promise((resolve) => {
    let data = localStorage.getItem("shopping-list-redux:state-1.0")
    data = JSON.parse(data || "")

    delay = setTimeout(() => resolve(data), 5000)
  })

  clearTimeout(delay)

  if (!response) return []

  return response as Product[]
})

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
      state.items = [...state.items, action.payload]
      state.total = state.total + action.payload.price

      if (action.payload.checked) {
        state.marked = state.marked + action.payload.price
      }

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
      const value = state.items.find((product) => product.id === action.payload)

      if (value) state.marked = state.marked + value?.price

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
