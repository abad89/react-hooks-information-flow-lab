import React from "react";

function Header({onDarkModeClick, getDarkMode}) {
  return (
    <div className={"App " + (getDarkMode() ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {(getDarkMode()?"Light":"Dark")} Mode
        </button>
      </header>
    </div>
  );
}

export default Header;
