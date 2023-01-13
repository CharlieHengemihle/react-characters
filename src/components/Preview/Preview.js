import './Preview.css';

export default function Preview({ head, shirt }) {
  return (
    <div className="preview">
      <img src={`/heads/${head}.png`} />
      <img src={`/shirts/${shirt}.png`} />
    </div>
  );
}
