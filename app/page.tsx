import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className='flex min-h-screen'>
      <div className="w-1/5 bg-red-500">
        SideBar
      </div>
      <div className="w-4/5 bg-green-500">
        Main Content
      </div>
    </div>
  )
}
