/* eslint-disable react/prop-types */
//I kept having a warning about the prop-types but I don't know how to fix it
// and the only thing that came up was above code. Ive read the files and I didnt understand them :D

export default function Upgrades(props) {
  function buyMagicFlour() {
    if (props.cookieCount >= 50) {
      props.setCookieCount(props.cookieCount - 50);
      props.setMessage("Magic Flour purchased!");
    } else {
      props.setMessage("Not enough cookies for Magic Flour!");
    }
  }

  function buySpecialChocolate() {
    if (props.cookieCount >= 100) {
      props.setCookieCount(props.cookieCount - 100);
      props.setMessage("Special Chocolate purchased!");
    } else {
      props.setMessage("Not enough cookies for Special Chocolate!");
    }
  }

  return (
    <div>
      <h2>Upgrades</h2>
      <button className="upgrade-button" onClick={buyMagicFlour}>
        Buy Magic Flour (50 Cookies)
      </button>
      <button className="upgrade-button" onClick={buySpecialChocolate}>
        Buy Special Chocolate (100 Cookies)
      </button>
    </div>
  );
}
