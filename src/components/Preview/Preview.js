import './Preview.css';

export default function Preview({ head, shirt, bottom }) {
  return (
    <div className="preview">
      <img src={`/heads/${head}.png`} />
      <img src={`/shirts/${shirt}.png`} />
      <img src={`/bottoms/${bottom}.png`} />
    </div>
  );
}
