import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


export default function Home() {
  return <div>
    <h1 className='mb-4 text-2xl font-bold'>This is my Title</h1>
    <p>
      This is my Paragraph
    </p>
  </div>
}
