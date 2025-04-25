import { useState } from 'react'


function WorkingKnolage() {
  const [count, setCount] = useState(0)

  return (
    <>
   
   <div className='flex flex-col items-center'>
          <div className='text-4xl mb-4'>💪</div>
          <h3 className='text-xl font-semibold mb-2'>Working Knowledge</h3>
          <ul className='text-left'>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>Semantic HTML</li>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>Flexbox</li>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>Markdown</li>
            <li className='mb-1'><span className='inline-block mr-2'>✅</span>JS: Local storage</li>
            <li className="mb-1"><span className="inline-block mr-2">✅</span>Figma</li>
            <li className="mb-1"><span className="inline-block mr-2">✅</span>CSS grid</li>
            <li className="mb-1"><span className="inline-block mr-2">✅</span>Forms</li>
            <li className="mb-1"><span className="inline-block mr-2">✅</span>JS: DOM manipulations</li>
            <li><span className="inline-block mr-2">✅</span>SASS</li>
            </ul>
        </div>

    </>
  )
}

export default WorkingKnolage
