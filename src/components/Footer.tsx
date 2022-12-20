import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import printerest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
  return (
    <div className='flex flex-col w-full p-4 mx-auto text-center text-white md:items-start md:justify-around md:flex-row md:text-left bg-veryDarkViolet'>
      <h4 className='text-2xl font-bold md:text-3xl'>Shortly</h4>

      <div className='mt-8 md:mt-0'>
        <p className='mb-3 font-bold'>Feature</p>
        <a href='#/' className='block font-light text-gray'>
          Link Shortening
        </a>
        <a href='#/' className='block font-light text-gray'>
          Branded Links
        </a>
        <a href='#/' className='block font-light text-gray'>
          Analytics
        </a>
      </div>

      <div className='mt-8 md:mt-0'>
        <p className='mb-3 font-bold'>Resources</p>
        <a href='#/' className='block font-light text-gray'>
          Blog
        </a>
        <a href='#/' className='block font-light text-gray'>
          Developers
        </a>
        <a href='#/' className='block font-light text-gray'>
          Support
        </a>
      </div>

      <div className='mt-8 md:mt-0'>
        <p className='mb-3 font-bold'>Company</p>
        <a href='#/' className='block font-light text-gray'>
          About
        </a>
        <a href='#/' className='block font-light text-gray'>
          Our Team
        </a>
        <a href='#/' className='block font-light text-gray'>
          Careers
        </a>

        <a href='#/' className='block font-light text-gray'>
          Catact
        </a>
      </div>

      <div className='flex flex-row items-center justify-center mt-8 space-x-4 md:mt-0 '>
        <img src={facebook} alt='facebook' />
        <img src={twitter} alt='twitter' />
        <img src={printerest} alt='printerest' />
        <img src={instagram} alt='instagram' />
      </div>
    </div>
  );
};

export default Footer;
