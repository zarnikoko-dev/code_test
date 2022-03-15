import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  co_success_vissible:false,
}

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleCOSuccessModal: (state) => {
      state.co_success_vissible = !state.co_success_vissible;
    },
  },
})

// Action creators are generated for each case reducer function
export const { toggleCOSuccessModal } = modalSlice.actions

export default modalSlice.reducer