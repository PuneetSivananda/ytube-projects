import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


export default function Home() {
  return <div>
    <div className='mx-4 bg-blue-500 text-white font-bold'>
      Box with margin
    </div>
    <div className='p-4 bg-red-500 text-white font-bold'>
      Box with padding
    </div>
  </div>
}
