import './Editor.css';

export default function Editor({ head, setHead }) {
  return (
    <div className="editor">
      <div className="form">
        <select value={head} onChange={(e) => setHead(e.target.value)}>
          <option value="duck">Duck?</option>
          <option value="horse">Horse?</option>
          <option value="snake">SNAKE!</option>
        </select>
      </div>
    </div>
  );
}
