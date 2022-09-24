import React, { useState } from 'react'
import { useWords } from '../WordsContext'
import { observer } from "mobx-react-lite";
import { useLottie } from "lottie-react";
import animation from '../animations/trophy.json'
import styled from '@emotion/styled'

const Trophy = observer(() => {
    
      const store = useWords();

      const options = {
      animationData: animation,
      loop: false,
      autoplay: true,
      rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
      }
    };
  
    const { View } = useLottie(options);


    const [winner, setWinner] = useState({})
    const [show, setShow] = useState(false)

    const handleClick = () => {
        setShow(true)
        const data = store.winLetter();
        setWinner(data)
    }

  return (
    <Wrapper>
        <h4>{`The most common letter is...`}</h4>
        <button className="button" onClick={() => handleClick()}>Click to find out</button>
        {show && (
        <div className="winner">
            <h1>{`${winner.letter}`}</h1>
            <h5>{`it appears ${winner.value} times`}</h5>
        </div>
        )}
        <div className="trophy">{View}</div>
    </Wrapper>
  )
})

const Wrapper = styled.section`
  background: white;
  height: 400px;
  padding: 1.2rem 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;

h1, h4, h5 {
text-align: center;
}

.winner {
    margin-top: 10px;
}

.trophy {
    width: 300px;
    position: absolute;
    margin-top: 100px;
}

`

export default Trophy