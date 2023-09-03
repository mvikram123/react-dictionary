import React from 'react';

const Meanings = ({ meanings }) => {
  return (
    <div>
      <h3>Meanings:</h3>
      {meanings.map((meaning, index) => (
        <div key={index}>
          <h4>{meaning.partOfSpeech}</h4>
          <ul>
            {meaning.definitions.map((definition, i) => (
              <li key={i}>
                {definition.definition}
                <br />
                Synonyms: {definition.synonyms.join(', ')}
                <br />
                Antonyms: {definition.antonyms.join(', ')}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Meanings;
