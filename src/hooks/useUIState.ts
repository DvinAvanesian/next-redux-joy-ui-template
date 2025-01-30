import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { PanelState, AppDispatch, updateState, UIState } from '@/lib/redux'

type DispatchFunc = () => AppDispatch
const useAppDispatch: DispatchFunc = useDispatch
const useAppSelector: TypedUseSelectorHook<PanelState> = useSelector

const useUIState = () => {
  const dispatch = useAppDispatch()

  const get = () => {
    return useAppSelector((state) => state.UI) as UIState
  }

  const update = (payload: Partial<UIState>) => {
    dispatch(updateState(payload))
  }

  return { update, get }
}

export default useUIState
