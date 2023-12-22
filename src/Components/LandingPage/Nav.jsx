import logosmall from '../../assets/logosmall.svg'
import logobig from '../../assets/logobig.svg'
export default function Nav() {
  return (
    <>
        {/*Small Screen */}
        <div className="lg:hidden items-center py-[8px] px-[20px] flex flex-row justify-between">
          <div className="h-full w-full">
            <img src={logosmall} alt="nftswap" />
          </div>
          <div className='h-[50px] w-[50px] border-red-500 border-2'>
          </div>
        </div>
        {/*Large Screen */}
        <div className='hidden py-[24px] px-[80px] md:flex flex-row items-center justify-center'>
          <div className="h-full w-full">
              <img src={logobig} alt="nftswap" />
          </div>
          <div className='md:hidden flex flex-row space-x-[56px]'>
            <p>Explore</p>
            <p>Swap</p>
            <p>Create</p>
            <p>Community</p>
          </div>
          <div>
            <button className='bg-transparent hover:bg-gray-700 text-white font-semibolD'>
              
            </button>
          </div>
        </div>
    </>
   
  )
}
