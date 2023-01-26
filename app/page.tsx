import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


export default function Home() {
  return (
    <div className='flex w-full'>
      <div className="w-1/5 h-16 bg-red-500">
        SideBar
      </div>
      <div className="w-4/5 h-16 bg-green-500">
        Main Content
      </div>
    </div>
  )
}
