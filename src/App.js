import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import routes from './routes';
import WordDetails from './components/WordDetails';

const wordData=[
  {
  "word": "bark",
  "phonetic": "/bɑːk/",
  "phonetics": [
  {
  "text": "/bɑːk/",
  "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-uk.mp3",
  "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=68569035",
  "license": {
  "name": "BY 4.0",
  "url": "https://creativecommons.org/licenses/by/4.0"
  }
  },
  {
  "text": "/bɑɹk/",
  "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-us.mp3",
  "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1769309",
  "license": {
  "name": "BY-SA 3.0",
  "url": "https://creativecommons.org/licenses/by-sa/3.0"
  }
  }
  ],
  "meanings": [
  {
  "partOfSpeech": "noun",
  "definitions": [
  {
  "definition": "The short, loud, explosive sound uttered by a dog, a fox, and some other animals.",
  "synonyms": [],
  "antonyms": []
  },
  {
  "definition": "An abrupt loud vocal utterance.",
  "synonyms": [],
  "antonyms": []
  }
  ],
  "synonyms": [],
  "antonyms": []
  },
  {
  "partOfSpeech": "verb",
  "definitions": [
  {
  "definition": "To make a short, loud, explosive noise with the vocal organs (said of animals, especially dogs).",
  "synonyms": [
  "give tongue"
  ],
  "antonyms": [],
  "example": "The neighbour's dog is always barking."
  },
  {
  "definition": "To make a clamor; to make importunate outcries.",
  "synonyms": [],
  "antonyms": []
  },
  {
  "definition": "To speak sharply.",
  "synonyms": [],
  "antonyms": [],
  "example": "The sergeant barked an order."
  }
  ],
  "synonyms": [
  "give tongue",
  "latrate"
  ],
  "antonyms": []
  }
  ],
  "license": {
  "name": "CC BY-SA 3.0",
  "url": "https://creativecommons.org/licenses/by-sa/3.0"
  },
  "sourceUrls": [
  "https://en.wiktionary.org/wiki/bark"
  ]
  },
  {
  "word": "bark",
  "phonetic": "/bɑːk/",
  "phonetics": [],
  "meanings": [],
  "license": {},
  "sourceUrls": []
  },
  {
  "word": "bark",
  "phonetic": "/bɑːk/",
  "phonetics": [
  {
  "text": "/bɑːk/",
  "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-uk.mp3",
  "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=68569035",
  "license": {
  "name": "BY 4.0",
  "url": "https://creativecommons.org/licenses/by/4.0"
  }
  },
  {
  "text": "/bɑɹk/",
  "audio": "https://api.dictionaryapi.dev/media/pronunciations/en/bark-us.mp3",
  "sourceUrl": "https://commons.wikimedia.org/w/index.php?curid=1769309",
  "license": {
  "name": "BY-SA 3.0",
  "url": "https://creativecommons.org/licenses/by-sa/3.0"
  }
  }
  ],
  "meanings": [
  {
  "partOfSpeech": "noun",
  "definitions": [
  {
  "definition": "A small sailing vessel, e.g. a pinnace or a fishing smack; a rowing boat or barge.",
  "synonyms": [],
  "antonyms": []
  },
  {
  "definition": "A sailing vessel or boat of any kind.",
  "synonyms": [],
  "antonyms": []
  },
  {
  "definition": "A vessel, typically with three (or more) masts, with the foremasts (or fore- and mainmasts) square-rigged, and mizzenmast schooner-rigged.",
  "synonyms": [],
  "antonyms": []
  }
  ],
  "synonyms": [],
  "antonyms": []
  }
  ],
  "license": {
  "name": "CC BY-SA 3.0",
  "url": "https://creativecommons.org/licenses/by-sa/3.0"
  },
  "sourceUrls": [
  "https://en.wiktionary.org/wiki/bark"
  ]
  }
  ]


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {wordData.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
