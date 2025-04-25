import { useState } from 'react'

function Wanttolearn() {
    const [count, setCount] = useState(0)
  
    return (
      <>
     
     <div className='flex flex-col items-center'>
          <div className='text-4xl mb-4'>🎓</div>
          <h3 className='text-xl font-semibold mb-2'>Want to learn</h3>
          <ul className='text-left'>
            <li className='mb-1'><span className='inline-block mr-2'>•</span>React JS</li>
            <li className='mb-1'><span className='inline-block mr-2'>•</span>Node JS</li>
            <li className='mb-1'><span className='inline-block mr-2'>•</span>Electron</li>
            <li className='mb-1'><span className='inline-block mr-2'>•</span>Server side rendering</li>
            <li className="mb-1"><span className="inline-block mr-2">•</span>Typescript</li>
            <li className="mb-1"><span className="inline-block mr-2">•</span>Gatsby</li>
            <li><span className="inline-block mr-2">•</span>Websockets</li>
            </ul>
        </div>
  
      </>
    )
  }
  
  export default Wanttolearn