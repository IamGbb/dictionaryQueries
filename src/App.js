import React, {useEffect } from 'react'
import { useWords } from './WordsContext'
import { observer } from "mobx-react-lite";
import styled from '@emotion/styled'
import Card from './components/Card'
import DoubleLetter from './components/DoubleLetter'
import Trophy from './components/Trophy'

const App = observer(() => {
  const store = useWords();

  useEffect(() => {
    store.getWords()
  })


  return (

      <Wrapper>
        <div className="title">
        <h1>The English Dictionary</h1>
        <h2>the english dictionary has <span>{`${store.wordsList.length}`}</span> words</h2>
        </div>
        <div className="container">
        <div className='pies'>
        <Card query='How many times does this letter appear' func={store.appearance}/>
        <Card query='How many words end with the letter' func={store.lastLetter}/>
        <Card query='How many words start with the letter' func={store.firstLetter}/>
        </div>
        <div className='bottomGraph'>
          <DoubleLetter/>
          <Trophy/>
          </div>

        </div>
      </Wrapper>

    )
});

const Wrapper = styled.div`

@media screen and (min-width: 800px) {

.title {
  text-align: center;
  margin: 20px;
}

.container {
  display: grid;
  grid-template-rows: 1fr 1fr;
}

.pies {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin: 0 100px 0 100px;
  padding: 0 100px;
}
.bottomGraph {
 display: grid;

  grid-template-columns: 2fr 1fr;
  column-gap: 20px;
  margin: 0 100px 0 100px;
  padding: 0 100px;
}

}

@media screen and (max-width: 768px) {
  
.title {
  margin-top: 20px;
  text-align: center;

}

.pies {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 50px;
  padding: 50px;
}

.pies * {
margin-bottom: 10px;
}

.bottomGraph {
 display: grid;
grid-template-rows: 1fr 1fr;
  padding: 50px;
  gap: 50px;
}

.bottomGraph * {
  margin-bottom: 20px;
}
}

`


export default App