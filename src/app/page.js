import './globals.css'

export default function Home() {
  return (
    <>
      <div className='grid grid-cols-7 h-full'>
        <div className='bg-red-300 col-start-1 col-end-4'></div>
        <div className='col-start-4 col-end-8 description'>
          <nav className='flex items-center'>
            <ul className='list-none flex justify-around items-center w-full'>
              <li>Présentation</li>
              <li>Projet</li>
              <li>Avenir</li>
              <li>Réseau</li>
            </ul> 
          </nav>
          <div className='px-24 flex flex-col justify-center'>
            <h2 className='text-2xl mb-2'>Tiago Rodrigues Sousa</h2>
            <h3 className='text-xl mb-4'>Developper</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
              magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className=''>

          </div>
        </div>
      </div>
    </>
  )
}
