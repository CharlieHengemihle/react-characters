import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Main.css';
import { useState } from 'react';
import Log from '../Log/Log.js';

export default function Main() {
  const [head, setHead] = useState('duck');
  const [shirt, setShirt] = useState('pink');
  const [bottom, setBottom] = useState('jnco');
  const [catchphrase, setCatchphrase] = useState([]);
  const [headCount, setHeadCount] = useState(0);
  const [shirtCount, setShirtCount] = useState(0);
  const [bottomCount, setBottomCount] = useState(0);

  return (
    <main>
      <Editor
        {...{
          head,
          setHead,
          setHeadCount,
          shirt,
          setShirt,
          setShirtCount,
          bottom,
          setBottom,
          setBottomCount,
          catchphrase,
          setCatchphrase,
          headCount,
          shirtCount,
          bottomCount,
        }}
      />
      <Preview {...{ head, shirt, bottom }} />
      <Log {...{ catchphrase, headCount, shirtCount, bottomCount }} />
    </main>
  );
}
