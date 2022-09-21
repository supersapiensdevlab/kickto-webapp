import Logo from "../../Assets/logo.svg";

export default function Header() {
  return (
    <div className='navbar kickto-dark shadow '>
      <div className='navbar-start'>
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52'>
            <li>
              <a>Litepaper</a>
            </li>
            <li>
              <a>DEX</a>
            </li>{" "}
            <li>
              <a>Marketplace</a>
            </li>
          </ul>
        </div>
        <img className='lg:ml-12' src={Logo} height='48' width='128'></img>{" "}
        <a className='btn btn-ghost normal-case text-xl'> </a>
      </div>
      <div className='navbar-center hidden lg:flex '>
        <ul className='flex flex-row p-0 font-semibold  gap-x-3 tracking-wide text-lg'>
          <li className='flex-col rounded-none  '>
            <div className='hover:border-b-4 pb-2 cursor-pointer hover:border-b-kickto-primary hover:bg-transparent rounded-none hover:text-white border-4 border-transparent'>
              Litepaper
            </div>
          </li>
          <li className='flex-col rounded-none  '>
            <div className='hover:border-b-4 pb-2 cursor-pointer hover:border-b-kickto-primary hover:bg-transparent rounded-none hover:text-white border-4 border-transparent'>
              DEX
            </div>
          </li>{" "}
          <li className='flex-col rounded-none  '>
            <div className='hover:border-b-4 pb-2 cursor-pointer hover:border-b-kickto-primary hover:bg-transparent rounded-none hover:text-white border-4 border-transparent'>
              Marketplace
            </div>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <a className='btn-brand btn'>Get the App</a>
      </div>
    </div>
  );
}
