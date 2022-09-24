import React, { useState, useEffect } from 'react'
import { useWords } from '../WordsContext'
import { observer } from "mobx-react-lite";
import styled from '@emotion/styled'
import LetterChart from '../charts/LetterChart'

const Card = observer(({query, func}) => {
 const store = useWords();

    const [result, setResult] = useState(Number)
    
    const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const chartData = [
        {label: `${result.toString()} words found` , value:result},
        {label: 'Rest of the words', value: store.wordsList.length - result}]
    
  return (
    <Wrapper>
    <div className="card">
    <header>
      <h5>{query}</h5>
    <input 
    maxLength="1" 
    list="letters" 
    id="letter-choice" 
    name="letter-choice"
    placeholder='choose a letter'
    onChange={(e) => setResult(func(e.target.value)) }
    />

    <datalist id="letters">
        {alphabet.map((letter, index) =>{
            return (
                <option key={index} value={letter}/>
                )
            })}
    </datalist>

    </header>
    <div className="chart">
    <LetterChart data={chartData}/>
    </div>

    </div>
    </Wrapper>
  )
})

const Wrapper = styled.section`
  background: white;
  height: 380px;
  padding: 1.2rem 1.4rem;
  }

header {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    column-gap: 1rem;
}

input {
    width: 130px;
    height: 30px;
    padding: 10px;
}

input::placeholder {
  font-family: 'Product Sans',sans-serif;
}

input::-webkit-calendar-picker-indicator {
  opacity: 100;
}
`

export default Card;
