'use client'

import createCache, { Options } from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { CacheProvider } from '@emotion/react'
import { CssVarsProvider, useTheme } from '@mui/joy'
import CssBaseline from '@mui/joy/CssBaseline'
import { useState } from 'react'
import { Box } from '@mui/joy'
import vazir from '@/res/fonts/vazir'
import theme from '@/styles/theme'

interface Props {
  children: React.ReactNode
}

const ThemeRegistry: React.FC<Props> = ({ children }) => {
  const t = useTheme()

  const [{ cache, flush }] = useState(() => {
    const cache = createCache({ key: 'joy' })
    cache.compat = true
    const prevInsert = cache.insert
    let inserted: string[] = []
    cache.insert = (...args) => {
      const serialized = args[1]
      if (cache.inserted[serialized.name] === undefined) {
        inserted.push(serialized.name)
      }
      return prevInsert(...args)
    }
    const flush = () => {
      const prevInserted = inserted
      inserted = []
      return prevInserted
    }
    return { cache, flush }
  })

  useServerInsertedHTML(() => {
    const names = flush()
    if (names.length === 0) {
      return null
    }
    let styles = ''
    for (const name of names) {
      styles += cache.inserted[name]
    }
    return (
      <style
        key={cache.key}
        data-emotion={`${cache.key} ${names.join(' ')}`}
        dangerouslySetInnerHTML={{
          __html: styles
        }}
      />
    )
  })

  if (typeof window !== 'undefined')
    return (
      <CacheProvider value={cache}>
        <CssVarsProvider theme={theme} defaultMode="light">
          <CssBaseline />
          <Box
            className={vazir.className}
            sx={{
              position: 'fixed',
              height: '100%',
              width: '100%',
              background: t.vars.palette.background.body,
              direction: 'rtl',
              transition: 'background 200ms ease'
            }}
          >
            {children}
          </Box>
        </CssVarsProvider>
      </CacheProvider>
    )
  else return <></>
}

export default ThemeRegistry
