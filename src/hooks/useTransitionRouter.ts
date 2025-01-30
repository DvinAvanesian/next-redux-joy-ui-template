'use client'

import { useRouter } from 'next/navigation'

import useUIState from '@/hooks/useUIState'

const useTransitionRouter = () => {
  const router = useRouter()
  const { update } = useUIState()

  const timeout = 200

  const route = (r: string, sameNav?: true) => {
    update(sameNav ? { pageExiting: true } : { pageExiting: true, activePage: undefined })
    setTimeout(() => {
      router.push(r)
    }, timeout)
  }

  const { refresh, prefetch } = router

  return { route, prefetch, refresh }
}

export default useTransitionRouter
