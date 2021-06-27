import { createSlice } from "@reduxjs/toolkit"


export const storeSlice = createSlice({
  name: 'cart',
  initialState: {
    items:
      [
        // {
        //   title: 'lipstick',
        //   price: 555,
        //   quantity: 1
        // }, {
        //   title: 'eyeliner',
        //   price: 700,
        //   quantity: 1
        // }, {
        //   title: 'brush',
        //   price: 400,
        //   quantity: 1
        // },
      ]
  },
  reducers: {
    addProduct: (state, action) => {
      // update quantity if already present
      state.items.map(item => {
        if (item.title !== action.payload.title) {
          return item
        }
        else if (item.title === action.payload.title) {
          return {
            ...item,
            quantity: item.quantity += 1
          }
        }
      })

      // add object if not present
      let present = false
      state.items.map(item => {
        if (item.title === action.payload.title) {
          present = true
        }
      })
      if (!present) {
        state.items.push({ title: action.payload.title, price: action.payload.price, quantity: 1 })
      }
    },

    removeProduct: (state, action) => {
      // remove item from the cart

      return {
        ...state,
        items: state.items.filter((item) => item.title !== action.payload)
      }

    },
  }
})

export const { addProduct, removeProduct } = storeSlice.actions
export default storeSlice.reducer