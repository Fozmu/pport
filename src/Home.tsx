import { useState } from 'react'
import WorkingKnolage from './WorkingKnolage'
import Knowsomething from './knowsomething'
import Wanttolearn from './Wanttolearn'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-blue-500 py-16 text-white flex flex-col items-center'>
      <div className='container mx-auto text-center'>
        <h2 className='text-3xl font-bold mb-8'>My Skills</h2>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
       <WorkingKnolage></WorkingKnolage>
      <Knowsomething></Knowsomething>
      <Wanttolearn></Wanttolearn>





        </div>
      </div>
      </div>




    </>
  )
}

export default Home