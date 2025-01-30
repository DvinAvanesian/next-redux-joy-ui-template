'use client'

import store from '@/lib/redux/store'
import { Provider } from 'react-redux'

interface Props {
  children: React.ReactNode
}

const StateProvider: React.FC<Props> = ({ children }) => <Provider store={store}>{children}</Provider>

export default StateProvider
