import './Log.css';

export default function Log({ catchphrase, headCount, shirtCount, bottomCount }) {
  return (
    <div className="log">
      <h2>
        You have changes your head {headCount} times, your shirt {shirtCount} times and your pants{' '}
        {bottomCount} times. And we could never forget those cool catchphrases:
      </h2>
      <ul className="catchy">
        {catchphrase.map((catchphrase) => {
          return <li key={catchphrase}>{catchphrase}</li>;
        })}
      </ul>
    </div>
  );
}
