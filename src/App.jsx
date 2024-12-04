import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const coffees = useLoaderData();

  return (
    <>
      
      <h1 className='text-amber-950 font-bold text-2xl text-center my-10'>Hot Coffees: {coffees.length}</h1>
      <div className='grid grid-cols-2 w-11/12 mx-auto gap-5'>
      {
        coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
      }
      </div>
    </>
  )
}

export default App
