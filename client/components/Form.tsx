import { useState, useEffect } from 'react'
import Sentiment from 'sentiment'
const sentiment = new Sentiment()

const neutralsound = new Audio('../components/sound/Cepiano.WAV')
const positivesound = new Audio('../components/sound/Gepiano.WAV')
const negativeaudiosound = new Audio('../components/sound/Bdimepiano.WAV')

const savePrompt = () => {
  return (
    <div>
      <div></div>
    </div>
  )
}

const Form = () => {
  const [userInput, setuserInput] = useState('')
  const [sentimentScore, setSentimentScore] = useState(null)

  useEffect(() => {
    setSentimentScore(sentiment.analyze(userInput))
  }, [userInput])

  // function addSentimentScore() {
  //   const newSentiment = sentimentScore
  //   setNewSentimentScore((list: Array<number>) => [...list, newSentiment])
  // }
  // console.log(addSentimentScore())

  return (
    <div className="header">
      <div>
        <input
          value={userInput}
          onChange={(e) => setuserInput(e.target.value)}
          style={{ padding: '20px', fontSize: '20px', width: '90%' }}
        />
        {sentimentScore !== null ? (
          <p>Sentiment Score: {sentimentScore.score}</p>
        ) : (
          ''
        )}

        {/* <button onClick={addSentimentScore}></button> */}

        {sentimentScore ? (
          sentimentScore.score === 0 ? (
            <div>
              <img alt="neutral" />
              <audio onChange={neutralsound}></audio>
            </div>
          ) : sentimentScore.score > 0 ? (
            <img alt="postive" />
          ) : (
            <img alt="negative" />
          )
        ) : (
          ''
        )}
      </div>
      <div>
        <button>Save Prompt</button>
        <button>Play Emotional Journey</button>
      </div>
    </div>
  )
}

export default Form
