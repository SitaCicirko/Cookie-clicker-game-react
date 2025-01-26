/* eslint-disable react/prop-types */
//I kept having a warning about the prop-types but I don't know how to fix it
// and the only thing that came up was above code. Ive read the files and I didnt understand them :D

export default function Upgrades(props) {
  const upgrades = [
    { name: "Magic Flour", cost: 50 },
    { name: "Special Chocolate", cost: 100 },
  ];

  function buyUpgrade(name, cost) {
    if (props.cookieCount >= cost) {
      props.setCookieCount(props.cookieCount - cost);
      props.setMessage(`${name} purchased!`);
    } else {
      props.setMessage(`Not enough cookies for ${name}!`);
    }
  }

  return (
    <div>
      <h2>Upgrades</h2>
      {upgrades.map((upgrade) => (
        <button
          key={upgrade.name}
          className="upgrade-button"
          onClick={() => buyUpgrade(upgrade.name, upgrade.cost)}
        >
          Buy {upgrade.name} ({upgrade.cost} Cookies)
        </button>
      ))}
    </div>
  );
}
