import logosmall from '../../assets/logosmall.svg'
import logobig from '../../assets/logobig.svg'
export default function Nav() {
  return (
    <>
        {/*Small Screen */}
        <div className="md:hidden items-center py-[8px] px-[20px] flex flex-row justify-between">
          <div className="h-full w-full">
            <img src={logosmall} alt="nftswap" />
          </div>
          <div className='h-[50px] w-[50px] border-red-500 border-2'>
          </div>
        </div>
        {/*Large Screen */}
        <div className='hidden py-[24px] px-[80px] md:flex flex-row items-center justify-between'>
          <div className="h-full w-fit">
              <img src={logobig} alt="nftswap" />
          </div>
          <div className='md:hidden lg:flex flex-row py-[16px] items-center space-x-[56px]'>
            <p className='text-white text-[16px] font-semibold leading-[24px]'>Explore</p>
            <p className='text-white text-[16px] font-semibold leading-[24px]'>Swap</p>
            <p className='text-white text-[16px] font-semibold leading-[24px]'>Create</p>
            <p className='text-white text-[16px] font-semibold leading-[24px]'>Community</p>
          </div>
          <div>
            <button className='bg-NSYellow flex rounded-[8px] justify-center items-center px-[40px] py-[16px] text-[16px] text-center font-bold leading-[24px] text-white w-fit'> Sign up for free </button>
          </div>
        </div>
    </>
   
  )
}
