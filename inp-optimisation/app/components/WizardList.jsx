export default function WizardList({ wizard }) {
  const src = `/images/${wizard.name.toLowerCase().replace(' ', '-')}.webp`;
  return (
    <a href={`wizard/${wizard.id}`}>
      <div className="card">
        {wizard.id > 9 ? (
          // eslint-disable-next-line
          <img src="/images/wizard.webp" alt={wizard.name} />
        ) : (
          // eslint-disable-next-line
          <img src={src} alt={wizard.name} />
        )}
        <h3>{wizard.name}</h3>
        <p>{wizard.house}</p>
      </div>
    </a>
  );
}
