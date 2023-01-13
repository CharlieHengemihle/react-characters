import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Main.css';
import { useState } from 'react';
import Log from '../Log/Log.js';

export default function Main() {
  const [head, setHead] = useState('duck');
  const [shirt, setShirt] = useState('pink');
  const [bottom, setBottom] = useState('jnco');
  const [catchphrase, setCatchphrase] = useState('');
  const [headCount] = useState(0);
  const [shirtCount] = useState(0);
  const [bottomCount] = useState(0);

  return (
    <main>
      <Preview {...{ head, shirt, bottom }} />
      <Editor
        {...{
          head,
          setHead,
          shirt,
          setShirt,
          bottom,
          setBottom,
          setCatchphrase,
          headCount,
          shirtCount,
          bottomCount,
        }}
      />
      <Log {...{ catchphrase, headCount, shirtCount, bottomCount }} />
    </main>
  );
}
