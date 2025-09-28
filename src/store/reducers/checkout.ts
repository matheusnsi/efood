import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type CheckoutStep = 'delivery' | 'payment' | 'confirmation'

type CheckoutState = {
  isOpen: boolean
  step: CheckoutStep
}

const initialState: CheckoutState = {
  isOpen: false,
  step: 'delivery'
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    open: (state, action: PayloadAction<CheckoutStep | undefined>) => {
      state.isOpen = true
      state.step = action.payload ?? 'delivery'
    },
    close: (state) => {
      state.isOpen = false
      state.step = 'delivery'
    },
    goTo: (state, action: PayloadAction<CheckoutStep>) => {
      state.step = action.payload
    }
  }
})

export const { open, close, goTo } = checkoutSlice.actions
export default checkoutSlice.reducer
