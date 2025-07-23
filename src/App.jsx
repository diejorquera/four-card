import  { Hero } from './components/Hero';
import { CardsContainer } from './components/CardsContainer';
function App() {

  return (
    <main className="font-Poppins text-grey-400 bg-[#fafafa] ">
      <section className='h-screen'>
      <Hero />
      <CardsContainer />
      </section>
    </main>
  )
}

export default App
