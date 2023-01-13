import { useState } from 'react';
import './Editor.css';

export default function Editor({
  head,
  setHead,
  shirt,
  setShirt,
  bottom,
  setBottom,
  setCatchphrase,
}) {
  const [inputValue, setInputValue] = useState('');

  const handleClick = (e) => {
    setCatchphrase((e) => [inputValue]);
    setInputValue('');
  };

  return (
    <div className="editor">
      <div className="form">
        <label>Head</label>
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="duck">Duck?</option>
          <option value="horse">Horse?</option>
          <option value="snake">SNAKE!</option>
        </select>
        <label>Shirt</label>
        <select value={shirt} onChange={(e) => setShirt(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
        </select>
        <label>Bottoms</label>
        <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
          <option value="jnco">Big Flair</option>
          <option value="tripp">Cool Goth</option>
          <option value="clown">Life of The Party</option>
        </select>
        <label>Give us a catchphrase!</label>
        <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleClick}>Add</button>
      </div>
    </div>
  );
}
