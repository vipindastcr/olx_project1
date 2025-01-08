
import olx from '../olx.png'
import lens from '../lens.png'
import arrow from '../arrow.png'
import search from '../search.png'

const Navbar = () => {
  return (
    
    <div className='flex p-4'>
      <img src={olx} className='w-11 h-9'/>
      <div className='flex border border-spacing-1 w-64 p-2 border-black ml-5'>
        <img src={lens} className='w-6 h-5 mt-1'/>
        <input placeholder='location'className='ml-3'/>
        <img src={arrow} className='w-8 h-7'/>
      </div>

      <div className='flex h-12 ml-4 border border-black'>
        <input placeholder='Find Cars, Mobile Phones and more.' className='ml-3 '/>
        <img src={search} />
      </div>

      <div className='flex h-12 p-3 ml-10 cursor-pointer'>
        <h1 className='font-semibold'>ENGLISH</h1>
        <img src={arrow} className='w-8 h-7'/>
      </div>

      <div className='flex h-12 p-3 ml-6 cursor-pointer underline hover:no-underline'>
        <h1 className='font-bold text-lg'>login</h1>
      </div>
    </div>
  )
}

export default Navbar
