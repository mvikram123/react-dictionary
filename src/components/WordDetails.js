import React from 'react';
import Phonetics from './Phonetics';
import Meanings from './Meanings';
//import WordDetails from './WordDetails';

const WordDetails = ({ wordData }) => {

    

  return (
    <div>
      <h2>{wordData.word}</h2>
      <Phonetics phonetics={wordData.phonetics} />
      <Meanings meanings={wordData.meanings} />
      {/* <WordDetails wordData={wordData} /> */}
    </div>
  );
};

export default WordDetails;
