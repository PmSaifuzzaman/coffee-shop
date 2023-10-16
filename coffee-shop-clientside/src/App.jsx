
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/coffeeCard';


function App() {

  const allCoffees = useLoaderData();
  console.log(allCoffees)


  return (
    <div>

      <h1 className='text-5xl text-red-500 text-center my-4'>Coffee Shop : {allCoffees.length}</h1>
      <div className='grid md:grid-cols-2 gap-5'>
        {
          allCoffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>)
        }
      </div>

    </div>
  )
}

export default App
