import { Inter } from 'next/font/google'
import { Instrument_Sans } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const instrumentSans = Instrument_Sans({ subsets: ['latin'], variable: '--font-instrument-sans' })

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={`${inter.variable} ${instrumentSans.variable}`}>
      {children}
    </div>
  )
}

export default HomeLayout
