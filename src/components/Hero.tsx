import working from './../images/illustration-working.svg';
import MyButton from './MyButton';

const Hero = () => {
  return (
    <div className='container flex flex-col-reverse mx-auto md:flex-row'>
      <div className='flex-1 px-4 mt-8 text-center md:text-left md:items-center md:pr-16'>
        <h1 className='text-3xl font-bold text-black md:text-5xl md:leading-[60px]'>
          More than just <br />
          shorter links
        </h1>
        <p className='mt-2 text-grayishViolet md:text-xl'>
          Build your brand's recognition and get detailed insights on how your links are
          performin.
        </p>
        <MyButton title='Get Started' className='my-8' />
      </div>

      <div className='flex-1 '>
        <img
          alt='working illustration'
          src={working}
          className='object-contain w-full h-full '
        />
      </div>
    </div>
  );
};

export default Hero;
