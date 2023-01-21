import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


export default function Home() {
  return (
    <div>
      <h1 className="border-4 border-nextjs">
        Hello world!
      </h1>
      <h1 className="text-nextjs">
        Hello world!
      </h1>
    </div>
  )
}
