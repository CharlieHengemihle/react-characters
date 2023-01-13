import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Main.css';
import { useState } from 'react';

export default function Main() {
  const [head, setHead] = useState('duck');
  const [shirt, setShirt] = useState('blue');

  return (
    <main>
      <Preview {...{ head, shirt }} />
      <Editor {...{ head, setHead, shirt, setShirt }} />
      {/* <Log {...} /> */}
    </main>
  );
}
