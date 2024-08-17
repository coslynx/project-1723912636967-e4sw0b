'use client'

import { SessionProvider } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { Toaster } from 'react-hot-toast'
import { ThemeProvider } from 'next-themes'
import { useStore } from '@/store/zustand'
import { getGoals } from '@/utils/helpers'
import { Layout } from '@/components/Layout'

export default function App({ Component, pageProps: { session, ...pageProps } }) {
  const [goals, setGoals] = useState([])
  const store = useStore()
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (session) {
      getGoals(session.user.id).then((goals) => {
        setGoals(goals)
        store.setGoals(goals)
        setIsLoading(false)
      })
    } else {
      setIsLoading(false)
    }
  }, [session, store])

  return (
    <>
      <SessionProvider session={session}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Toaster position="bottom-center" reverseOrder={false} />
          {isLoading ? (
            <div className="flex min-h-screen flex-col items-center justify-center">
              <p className="text-lg font-medium text-gray-800">Loading...</p>
            </div>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ThemeProvider>
      </SessionProvider>
    </>
  )
}