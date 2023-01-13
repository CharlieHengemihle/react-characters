import './Editor.css';

export default function Editor({ head, setHead, shirt, setShirt, bottom, setBottom }) {
  return (
    <div className="editor">
      <div className="form">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="duck">Duck?</option>
          <option value="horse">Horse?</option>
          <option value="snake">SNAKE!</option>
        </select>
        <select value={shirt} onChange={(e) => setShirt(e.target.value)}>
          <option value="blue">Blue</option>
          <option value="green">Green</option>
          <option value="pink">Pink</option>
        </select>
        <select value={bottom} onChange={(e) => setBottom(e.target.value)}>
          <option value="jnco">Big Flair</option>
          <option value="tripp">Cool Goth</option>
          <option value="clown">Life of The Party</option>
        </select>
      </div>
    </div>
  );
}
