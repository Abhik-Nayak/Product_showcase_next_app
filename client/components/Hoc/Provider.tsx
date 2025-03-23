import { ThemeProvider } from 'next-themes'
import React, { ReactNode } from 'react'

type Props = {}

const Provider = ({children}: { children: ReactNode}) => {
  return (
    <ThemeProvider attribute="class" enableSystem defaultTheme='system'>
        {children}
    </ThemeProvider>
  )
}

export default Provider