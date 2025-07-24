import  { Hero } from './components/Hero';
import { CardsContainer } from './components/CardsContainer';
function App() {

  return (
    <main className="font-Poppins text-grey-400 flex justify-center">
      <section className='w-[296px] my-[80px] xl:w-[1110px] xl:mx-auto'>
      <Hero />
      <CardsContainer />
      </section>
    </main>
  )
}

export default App
