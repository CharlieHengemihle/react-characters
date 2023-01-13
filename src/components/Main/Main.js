import Editor from '../Editor/Editor.js';
import Preview from '../Preview/Preview.js';
import './Main.css';
import { useState } from 'react';

export default function Main() {
  const [head, setHead] = useState('duck');

  return (
    <main>
      <Preview {...{ head }} />
      <Editor {...{ head, setHead }} />
      {/* <Log {...} /> */}
    </main>
  );
}
