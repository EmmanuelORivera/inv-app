import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { NextComponentType } from 'next'
import AuthGuard from '@/components/AuthGuard'
import {
  MantineProvider,
  ColorSchemeProvider,
  ColorScheme,
} from '@mantine/core'
import { useState } from 'react'
import PageLayout from '@/components/PageLayout'

export type CustomAppProps = AppProps & {
  Component: NextComponentType & { requireAuth?: boolean }
}

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: CustomAppProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || colorScheme === 'dark' ? 'light' : 'dark')

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme: colorScheme,
          fontFamily: 'Montserrat, sans-serif',
        }}
      >
        <SessionProvider
          session={session}
          refetchInterval={5 * 60}
          refetchOnWindowFocus
        >
          {Component.requireAuth ? (
            <AuthGuard>
              <PageLayout>
                <Component {...pageProps} />
              </PageLayout>
            </AuthGuard>
          ) : (
            <PageLayout>
              <Component {...pageProps} />
            </PageLayout>
          )}
        </SessionProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}
