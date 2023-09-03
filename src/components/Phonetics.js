import React from 'react';

const Phonetics = ({ phonetics }) => {
  return (
    <div>
      <h3>Phonetics:</h3>
      {phonetics.map((phonetic, index) => (
        <div key={index}>
          <p>{phonetic.text}</p>
          <audio controls>
            <source src={phonetic.audio} type="audio/mpeg" />
          </audio>
          <p>Source: <a href={phonetic.sourceUrl}>Link</a></p>
        </div>
      ))}
    </div>
  );
};

export default Phonetics;
