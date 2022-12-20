import NavBar from './components/NavBar';
import Hero from './components/Hero';
import StaticSection from './components/StaticSection';
import Footer from './components/Footer';
import MyButton from './components/MyButton';

function App() {
  return (
    <div className=' font-my_font max-w-[1440px] mx-auto'>
      <NavBar />
      <Hero />

      <StaticSection />

      <div className='w-full py-12 text-center text-white bg-primary-darkViolet'>
        <h3 className='mb-6 text-2xl font-bold md:text-3xl '>Boost your links today</h3>
        <MyButton title='Get Started' />
      </div>

      <Footer />
    </div>
  );
}

export default App;
