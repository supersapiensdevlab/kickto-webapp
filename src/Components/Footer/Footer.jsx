import Logo from "../../Assets/logo.svg";
import discord from "../../Assets/Icons/discord.svg";
import telegram from "../../Assets/Icons/telegram.svg";
import twitter from "../../Assets/Icons/twitter.svg";

export default function Footer() {
  return (
    <div className=' flex flex-col bg-kickto-darker shadow   align-middle items-center justify-between sm:justify-center space-y-5 sm:space-y-0 space-x-5   p-5'>
      <div className=''>
        <ul className='flex flex-row p-0 font-semibold  gap-x-3 tracking-wide text-lg'>
          <li className='flex-col rounded-none  '>
            <div className='active:text-kickto-primary hover:border-b-4 pb-2 cursor-pointer hover:border-b-kickto-primary hover:bg-transparent rounded-none hover:text-white border-4 border-transparent'>
              Litepaper
            </div>
          </li>
          <li className='flex-col rounded-none  '>
            <div className='active:text-kickto-primary hover:border-b-4 pb-2 cursor-pointer hover:border-b-kickto-primary hover:bg-transparent rounded-none hover:text-white border-4 border-transparent'>
              DEX
            </div>
          </li>
          <li className='flex-col rounded-none  '>
            <div className='active:text-kickto-primary hover:border-b-4 pb-2 cursor-pointer hover:border-b-kickto-primary hover:bg-transparent rounded-none hover:text-white border-4 border-transparent'>
              Marketplace
            </div>
          </li>
        </ul>
      </div>
      <div className=' kickto-dark '>
        <div className='flex  sm:flex w-full   space-y-5 sm:space-y-0 space-x-5'>
          <div className='space-y-5 sm:space-y-0 sm:flex align-middle items-center space-x-5'>
            <div className='flex-col flex align-middle items-center'>
              <img src={Logo} height='48' width='128'></img>
            </div>
            <div>
              <div className='flex flex-col font-semibold'>
                <p>+91 123 456 7890</p>
                <p>hello@kickto.app</p>
              </div>
            </div>
          </div>
          <div className='space-y-5 sm:space-y-0 sm:flex align-middle items-center space-x-5'>
            <div className='flex gap-4'>
              <img
                src={discord}
                className='h-12 w-12 hover:animate-wiggle_fast  cursor-pointer'></img>
              <img
                src={telegram}
                className='h-12 w-12 hover:animate-wiggle_fast  cursor-pointer'></img>

              <img
                src={twitter}
                className='h-12 w-12 hover:animate-wiggle_fast  cursor-pointer'></img>
            </div>

            <a className='btn-brand btn '>Get the App</a>
          </div>
        </div>
      </div>
    </div>
  );
}
