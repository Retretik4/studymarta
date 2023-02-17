import { useState } from 'react';
import wordPlay from '../data/wordPlay';
import generateRandomNum from '../functions/generateRandomNum';

const arr = JSON.parse(JSON.stringify(wordPlay));
let t;
// let ter = [];

function WordStudy() {
  const [clickAll, setClickAll] = useState(0);
  const [word, setWord] = useState(changeNewWord());
  // console.log(arr);

  function changeNewWord() {
    if (t === undefined) {
      t = generateRandomNum(arr.length);
      // ter.push(t);
      // console.log('ttt-0');
      // console.log(t);
      // console.log(arr.length);
      // console.log(ter);
      return arr;
    }

    if (clickAll === 0) {
      arr.splice(t, 1);
      t = generateRandomNum(arr.length);
      // ter.push(t);
      // console.log('ttt-3');
      // console.log(t);
      // console.log(arr.length);
      // console.log(ter);
      return arr;
    }
  }
  const changeNumberClick = () =>
    setClickAll(clickAll + 1 === 2 ? 0 : clickAll + 1);
  // console.log('clickAll');

  const changeWord = () => setWord(word);

  return (
    <div>
      {clickAll >= 0 ? <h1>{word[t].tUA}</h1> : <h1>...</h1>}

      <button onClick={changeNumberClick}>
        {clickAll === 0 ? 'ОТВЕТ' : 'След. слово'}
      </button>
      {clickAll >= 1 ? <h1>{word[t].tEN}</h1> : <h1>...</h1>}

      {/* <div>{word[t].tEN}</div>
      <div>{word[t].tRU}</div>
      <div>{word[t].tUA}</div> */}
    </div>
  );
}

export default WordStudy;
