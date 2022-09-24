import React from 'react'
import { useWords } from '../WordsContext'
import { observer } from "mobx-react-lite";
import styled from '@emotion/styled'
import DoubleLetterChart from '../charts/DoubleLetterChart'


const DoubleLetter = observer(() => {
  const store = useWords();

    
  return (
    <Wrapper>
    <div className="card">
    <header>
       <h5>Words with the same letter repeated in conjunction</h5>
    </header>
       <p>*letters which are not mentioned are not repeated in conjunction at all</p>

    <DoubleLetterChart data={store.doubleLetter()}/>

    </div>
    </Wrapper>
  )
})

const Wrapper = styled.section`
  background: white;
  padding: 1.2rem 1.4rem;
  height: 400px;

  
`


export default DoubleLetter