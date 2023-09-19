import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {NextUIProvider} from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NextUIProvider className="dark text-foreground bg-background">
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}
