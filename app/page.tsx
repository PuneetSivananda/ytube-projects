import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'


export default function Home() {
  return (
    <div>
      <h1 className='text-3xl'>Title 1</h1>
      <h2 className='text-2xl'>Title 2</h2>
      <h3 className='text-xl'>Title 3</h3>
      <p className='text-base underline decoration-red-500 decoration-wavy decoration-1 underline-offset-[5px] leading-loose capitalize'>a regular paragraph</p>
      <p className='text-sm'>A Description Paragraph</p>
      <p className='text-xs note'>A little note</p>
      <div className=''>
        <p className='break-words'>
          Lorem ipsum dolor sit amet consectetur Pneumonoultramicroscopicsilicovolcanoconiosis adipisicing elit. Laudantium iusto dolore perferendis alias pariatur iure dolorum voluptatem dignissimos, perspiciatis culpa soluta sit illum aut itaque repudiandae vitae. Beatae, rerum magni.
        </p>
      </div>
    </div>
  )
}
