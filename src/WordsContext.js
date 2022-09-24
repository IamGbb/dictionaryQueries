import React, { useContext } from 'react'
import axios from 'axios'
import { makeAutoObservable } from 'mobx'

const WordsContext = React.createContext()

export function useWords() {
  return useContext(WordsContext)
}

export function WordsProvider({ children }){

class WordsStore {
  wordsList = [];

  constructor(){
    makeAutoObservable(this)
  }
  
  getWords = async () => {
        try {
          const {data} = await axios('https://raw.githubusercontent.com/dwyl/english-words/master/words_dictionary.json')
          const allWords = Object.keys(data)
          this.wordsList = allWords
        } catch (error) {
          console.log(error)
        }
    }

  firstLetter = (input) => {
    const newArray = (this.wordsList.filter(word => word[0] === input));
    return newArray.length;
  }

  appearance = (input) => {
    let counter = 0;
    for (let i = 0; i < this.wordsList.length; i++){
      let checkup = this.wordsList[i]
      for(let j = 0; j<checkup.length; j++){
        if (checkup[j] === input) {
          counter++};
      }
    }
    return counter
  }

  lastLetter = (input) => {
    const newArray = (this.wordsList.filter(word => word[word.length-1] === input));
    return newArray.length;
  }

  conjunction = () => {
    let counter = 0;
    for (let i = 0; i < this.wordsList.length; i++){
      let checkup = this.wordsList[i]
      for(let j = 0; j<checkup.length; j++){
        if (checkup[j] === checkup[j+1]) {
          counter++
          break;
          };
      }
    }
    return counter
  }

  doubleLetter = () => {
    let abc = new Map();
    for (let i = 0; i < this.wordsList.length; i++){
       let checkup = this.wordsList[i]
       for(let j = 0; j<checkup.length; j++){
         if (checkup[j] === checkup[j+1]) {
          abc.set(checkup[j], abc.get(checkup[j]) + 1 || 1);
           };
       }
     }
     const newArray = [];
     for (let [key, value] of abc){
      newArray.push({label: key, value: value});
     }
     return newArray   
  }

  winLetter = () => {
    
    let abc = new Map();
    for (let i = 0; i < this.wordsList.length; i++){
       let checkup = this.wordsList[i]
       for(let j = 0; j<checkup.length; j++){
          abc.set(checkup[j], abc.get(checkup[j]) + 1 || 1);
       }
     };

     let mostAppear = '';
     let compare = 0
     for (let [key, value] of abc){
      if (value > compare) {
        compare = value;
        mostAppear = key;
      };
     }
     return {letter: mostAppear, value: compare}
    }
};


const wordsStore = new WordsStore();


    return (
    <WordsContext.Provider value={wordsStore}>
        {children}
    </WordsContext.Provider>)
}