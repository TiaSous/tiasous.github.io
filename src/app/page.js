import './globals.css'
import Description from '@/components/description'

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-7 h-full'>
        <div className='bg-red-300 col-start-1 col-end-4'>
        </div>
        <Description />
      </div>
    </>
  )
}
