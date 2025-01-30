import { configureStore } from '@reduxjs/toolkit'
import UI from './reducers/ui'

const store = configureStore({
  reducer: {
    UI
  }
})

export type PanelState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
