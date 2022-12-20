import shortenBackgroundMobile from './../images/bg-shorten-mobile.svg';
import shortenBackgroundDesktop from './../images/bg-shorten-desktop.svg';
import recognition from './../images/icon-brand-recognition.svg';
import MyButton from './MyButton';

interface Card {
  iconName: string;
  title: string;
  text: string;
  showLink?: boolean;
  className?: string;
}

function Card({ iconName, title, text, showLink = true, className }: Card) {
  return (
    <div
      className={`flex flex-col items-center md:text-left md:flex-row ${className} flex-1`}>
      <div className='p-3 pt-0 text-center bg-white rounded md:text-left '>
        <div className='inline-flex flex-row justify-center p-3 mt-4 -translate-y-1/2 rounded-full md:justify-start bg-primary-darkViolet'>
          <img
            alt='recognition'
            src={recognition}
            className='object-none w-16 h-16 rounded-full '
          />
        </div>

        <h3 className='mb-6 text-2xl font-bold '>{title}</h3>
        <p className='text-grayishViolet'>{text}</p>
      </div>

      {showLink && <div className='w-2 h-16 md:h-2 bg-primary-myCyan md:w-16 ' />}
    </div>
  );
}

const StaticSection = () => {
  return (
    <div className='w-full px-4 pb-32 mx-auto mt-32 md:px-32 bg-lightGray'>
      <div className='container relative flex flex-col p-6 mx-auto space-y-4 overflow-hidden -translate-y-1/2 rounded-lg md:flex-row bg-primary-darkViolet md:space-x-0 shorten-background-mobile'>
        <img
          src={shortenBackgroundMobile}
          alt='background'
          className='absolute top-0 right-0 z-0 object-contain h-40 max-w-full md:hidden '
        />

        <img
          src={shortenBackgroundDesktop}
          alt='background'
          className='absolute inset-0 z-0 hidden object-cover -top-4 md:inline-block'
        />
        <div className='z-20 flex-1 md:pr-4'>
          <input
            type='text'
            name='link'
            placeholder='Shorten a link here ...'
            className='w-full px-8 py-4 mr-8 rounded-md '
          />
        </div>

        <MyButton title='Shorten it!' className='z-20 rounded-md md:ml-4' />
      </div>

      <div className='container mx-auto text-center'>
        <h2 className='mb-8 text-3xl font-bold text-primary-darkViolet'>
          Advanced Statics
        </h2>
        <p className='mb-16 text-grayishViolet'>
          Track how your links are performing across the web with <br /> our advanced
          statics dashboard
        </p>
      </div>

      <div className='container flex flex-col mx-auto md:flex-row'>
        <Card
          title='Card'
          text='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos molestiae'
          iconName='card'
        />
        <Card
          title='Card'
          text='repellat velit? Doloribus, ratione veniam voluptas corporis maiores unde nam.'
          iconName='card'
          className='md:translate-y-8'
        />

        <Card
          title='Card'
          text='repellat velit? Doloribus, ratione veniam voluptas corporis maiores unde nam.'
          iconName='card'
          showLink={false}
          className='md:translate-y-16'
        />
      </div>
    </div>
  );
};

export default StaticSection;
