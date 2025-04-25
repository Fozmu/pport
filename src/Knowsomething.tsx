import { useState } from 'react'

function Knowsomething() {
    const [count, setCount] = useState(0)
  
    return (
      <>
     
     <div className='flex flex-col items-center'>
          <div className='text-4xl mb-4'>🤔</div>
          <h3 className='text-xl font-semibold mb-2'>Know something about</h3>
          <ul className='text-left'>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>JavaScript ES6 + features</li>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>Flexbox</li>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>Markdown</li>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>JS: Local storage</li>
            <li className="mb-1"><span className="inline-block mr-2">✅</span>NPM Scripts</li>
            <li className="mb-1"><span className="inline-block mr-2">✅</span>Progressive web apps</li>
            <li className="mb-1"><span className="inline-block mr-2">✅</span>Git</li>
            <li><span className="inline-block mr-2">✅</span>Accessibility</li>
            </ul>
        </div>
  
      </>
    )
  }
  
  export default Knowsomething