import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type UIState = {
  pageExiting: boolean
  activePage: string | undefined
}

const initialState: UIState = {
  pageExiting: false,
  activePage: undefined
}

const UISlice = createSlice({
  name: 'UI',
  initialState,
  reducers: {
    updateState: (state, action: PayloadAction<Partial<UIState>>) => Object.assign(state, action.payload)
  }
})

export const { updateState } = UISlice.actions
export default UISlice.reducer
