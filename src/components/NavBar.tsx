import heroImage from '../images/illustration-working.svg';

import MyButton from './MyButton';

function NavBar() {
  return (
    <div className='container flex flex-row items-center justify-between px-4 py-8 mx-auto'>
      <div className='flex flex-row items-center'>
        <a href='#/' className='text-3xl font-bold font-my_font'>
          Shortly
        </a>

        <div className='flex-row items-center hidden ml-8 space-x-5 md:flex text-grayishViolet'>
          <a href='#/' className='uppercase text-md font-my_font'>
            Features
          </a>

          <a href='#/' className='uppercase text-md font-my_font'>
            Pricing
          </a>

          <a href='#/' className='uppercase text-md font-my_font'>
            Resources
          </a>
        </div>
      </div>
      <div className='flex flex-row'>
        <MyButton
          title='Login'
          className='hidden mr-3 bg-transparent text-veryDarkBlue md:block '
        />
        <MyButton className='hidden md:block' title='Sign Up' />
      </div>

      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-10 h-10 text-grayishViolet md:hidden'>
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
        />
      </svg>
    </div>
  );
}

export default NavBar;
