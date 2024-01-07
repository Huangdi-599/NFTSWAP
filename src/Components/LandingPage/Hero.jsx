import image from '../../assets/heroimage.svg'
import image_md from '../../assets/heroimagemd.svg'
import image_lg from '../../assets/heroimagelg.svg'

export default function Hero() {
  return (
    <>
    <div className="md:hidden flex flex-col mt-[40px]">
      <div className='flex flex-col space-y-[16px] mx-[20px]'>
        <div className='text-NSBlue text-[32px] font-black leading-[38px]'>
          <p className='self-stretch'>Create, <span className='text-NSYellow'>Swap,</span> Sell & Rule the NFT Metaverse. </p>
        </div>
        <p className='text-[#fff] text-[16px] font-semibold leading-[22px]'>
        Discover an array of rare digital items, exhibit your collection, and securely exchange them through our nftswap and become a true NFT seeker.
        </p>
      </div>
      <div className='text-[16px] mx-[20px] mt-[40px] flex flex-row space-x-[16px]'>
        <button className="rounded-[8px] w-full justify-center items-center py-[16px] bg-NSYellow text-center text-[#fff]">Swap your NFT</button>
        <button className="rounded-[8px] justify-center items-center w-full py-[16px] border-solid border-[2px] border-NSYellow text-center text-[#fff]">Watch how</button>
      </div>
      <div className='w-full h-full mt-[20px]'>
        <img className='w-full h-full' src={image} alt="nft-swaphero" />
      </div>
    </div>
    <div className="hidden md:flex flex-col relative  pt-[80px] xl:pt-[0px]">
      <div className=' flex flex-col xl:flex-row mx-[160px] xl:mx-[0px]'>
        <div className='flex flex-col xl:w-[45%] xl:h-full xl:mt-[127px] xl:ml-[120px] xl:mb-[127px]'>
          <p className='self-stretch mb-[20px] text-NSBlue text-[72px] font-black leading-[80px] '>Create, <span className='text-NSYellow'>Swap, </span>Sell & Rule the NFT Metaverse.</p>
          <p className='self-stretch mb-[40px] text-[20px] font-semibold leading-[28px]'>Discover an array of rare digital items, exhibit your collection, and securely exchange them through our nftswap and become a true NFT seeker.</p>
          <div className=' flex flex-row space-x-[40px]'>
            <button className="rounded-[8px] py-[16px] px-[40px] bg-NSYellow text-center text-[#fff] text-[16px]">Swap your NFT</button>
            <button className="rounded-[8px] py-[16px] px-[40px] border-solid border-[2px] border-NSYellow text-[16px] text-center text-[#fff]">Watch how</button>
          </div>
        </div>
        <div className='block xl:hidden h-full w-full '>
          <img className='w-full h-full border-red-500 border-2' src={image_md} alt="herons" />
        </div>
        <div className='hidden xl:block !h-full !w-[55%] '>
          <img className='!w-full !h-full ' src={image_lg} alt="herons" />
        </div>
      </div>
      <div className='absolute border-2 border-green-500 h-[100px] top-[94%] xl:top-[87%] w-full'>

      </div>
    </div>
    </>
  )
}
