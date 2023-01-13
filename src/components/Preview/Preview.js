import './Preview.css';

export default function Preview({ head }) {
  return (
    <div className="preview">
      <img src={`/heads/${head}.png`} />
    </div>
  );
}
