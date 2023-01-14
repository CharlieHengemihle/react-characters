import './Preview.css';

export default function Preview({ head, shirt, bottom }) {
  return (
    <div className="preview">
      <img className={`head ${head}`} src={`/heads/${head}.png`} />
      <img className="shirt" src={`/shirts/${shirt}.png`} />
      <img className="bottom" src={`/bottoms/${bottom}.png`} />
    </div>
  );
}
