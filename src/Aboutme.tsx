import { useState } from 'react'

function Aboutme() {
    const [count, setCount] = useState(0)

    return (
        <>
            <div className='flex items-center flex-col'> <img className="size-45 rounded-full mt-20" src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="" />
                <div className='flex items-center bg-white py-20'>
                    <div className='size-20 mb-20'><img src="https://i.imgur.com/qmB5MEX.png" alt="" /></div>
                    <div>
                        <p className='text-center text-2xl font-semibold mt'>My name is Maciej and I'm an aspiring <br /> <span className='text-sky-700'>Frontend Developer</span> and a keen Star Wars fan. </p>
                        <br />
                        <p> You might be interested in checking the list of <span className='text-sky-500'>my skills</span>. Don't forget to  have a glimpse at<br /><span className='text-sky-500'>my projects</span>. Currently I'm looking for a new challenges so if you have one - <span className='text-sky-500'>contact me</span> 😊</p>
                    </div>
                    <div className='size-20 mb-20'><img src="https://i.imgur.com/2lXW92b.png" alt="" /></div>
                </div>
            </div>

        </>
    )
}

export default Aboutme
