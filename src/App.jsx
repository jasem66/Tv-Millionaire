import React from 'react'
import './App.css'
import { useState,useEffect } from 'react'
import Trivia from './components/Trivia'
import { useMemo } from 'react'
import Timer from './components/Timer'
import Start from './components/Start'


function App() {

  const data = [
    {
      id: 1,
      question: 'Rolex is a company that specializes in what type of product?',
      answers: [
        {
          text: 'Phone',
          correct: false,
        },
        {
          text: 'Watches',
          correct: true,
        },
        {
          text: 'Food',
          correct: false,
        },
        {
          text: 'Cosmetic',
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: 'When did the website `Facebook` launch?',
      answers: [
        {
          text: '2004',
          correct: true,
        },
        {
          text: '2005',
          correct: false,
        },
        {
          text: '2006',
          correct: false,
        },
        {
          text: '2007',
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: 'Who played the character of harry potter in movie?',
      answers: [
        {
          text: 'Johnny Deep',
          correct: false,
        },
        {
          text: 'Leonardo Di Caprio',
          correct: false,
        },
        {
          text: 'Denzel Washington',
          correct: false,
        },
        {
          text: 'Daniel Red Cliff',
          correct: true,
        },
      ],
    },
  ]


//  const [first, setfirst] = useState(data)
const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeOut, setTimeOut] = useState(false)
  const [earned, setEarned] = useState('0 Lei')

  const moneyPyramid = useMemo(()=>
[
    { id: 1, amount: '100 Lei' },
    { id: 2, amount: '200 Lei' },
    { id: 3, amount: '300 Lei' },
    { id: 4, amount: '400 Lei' },
    { id: 5, amount: '500 Lei' },
    { id: 6, amount: '600 Lei' },
    { id: 7, amount: '700 Lei' },
    { id: 8, amount: '800 Lei' },
    { id: 9, amount: '900 Lei' },
    { id: 10, amount: '1000 Lei' },
    { id: 11, amount: '1100 Lei' },
    { id: 12, amount: '1200 Lei' },
    { id: 13, amount: '1300 Lei' },
    { id: 14, amount: '1400 Lei' },
    { id: 15, amount: '1500 Lei' },
  ].reverse()
  ,[]) 
  useEffect(() => {
questionNumber>1 && setEarned(moneyPyramid.find((money)=>money.id === questionNumber -1).amount)
  }, [questionNumber])
  

  return (
    <div className='app'>
      {userName ? (
        <>
          <div className='main'>
            {timeOut ? (
              <h2 className='endText'>You Earened {earned}</h2>
            ) : (
              <>
                <div className='top'>
                  <div className='timer'>
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>

                <div className='bottom'>
                  <Trivia
                    data={data}
                    setTimeOut={setTimeOut}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className='pyramid'>
            <ul className='moneyList'>
              {moneyPyramid.map((item) => {
                const { id, amount } = item

                return (
                  <li
                    className={
                      questionNumber === id
                        ? 'moneyListItem active'
                        : 'moneyListItem '
                    }
                  >
                    <span className='moneyListItemNumber'>{id}</span>
                    <span className='moneyListIemAmount'>{amount} Lei</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </>
      ) : (
        <Start setUserName={setUserName} />
      )}
    </div>
  )
}

export default App
