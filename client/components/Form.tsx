import { useState, useEffect } from 'react'
import Sentiment from 'sentiment'

const sentiment = new Sentiment()

const Form = () => {
  const [userInput, setuserInput] = useState('')
  return (
    <div className="">
      <div>
        <input
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
          style={{ padding: '20px', fontSize: '20px', width: '90%' }}
        />
      </div>
    </div>
  )
}

export default Form
