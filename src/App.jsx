import { useState, useEffect } from 'react'
import Image from './Image'
import './App.css'
import Dice from './Dice'
import React from 'react'

function App() {

  const [current, setCurrent] = useState({
    id: '',
    advice: ''
  })

  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('fetched')
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => setCurrent(data.slip))
  }, [count])

  function getQuote() {
    setCount(prev => prev + 1)
  }

  return (
      <main className="bg-dakrBlue">
        <section className="min-h-screen w-full flex justify-center items-center" >
          <div className="xl:max-w-2xl relative max-w-xs bg-darkGray font-manrope mx-auto rounded-2xl">
            <p className="text-neonGreen xl:pt-14 pt-10 font-[600] xl:text-lg text-center text-xs tracking-[2px] ">
              ADVICE {current.id}#
              </p>
            <h1 className="text-lightCyan xl:p-12 p-7 px-10 tracking-wide xl:text-3xl text-xl text-center font-[600]">
              "{current.advice}"
              </h1>
            <div className='flex w-4/5 items-center xl:gap-6 gap-3 mx-auto justify-center pb-16 xl:pb-20'>
              <div className="w-5/12 xl:w-8/12 bg-grayBlue h-px"></div>
              <div className="xl:scale-150">
                <Image />
              </div>
              <div className="w-5/12 xl:w-8/12 bg-grayBlue h-px"></div>
            </div>
            <div className="hover:shadow-neon transition-shadow xl:w-20 xl:h-20  w-16 h-16 bg-neonGreen mx-auto rounded-full absolute right-0 left-0 -translate-y-2/4 flex justify-center items-center cursor-pointer " 
                onClick={getQuote}>
              <div className="xl:scale-125">
                <Dice />
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}

export default App
