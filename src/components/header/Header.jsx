import React, { useCallback, useState } from "react";
import logo from "../../images/logo.png";
import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import OutsideClickHandler from "react-outside-click-handler";

export default function Header() {
  const [menuOpened, toggleMenuOpened] = useState(false);

  const getMenuStyles = useCallback(() => {
    if (document.documentElement.clientWidth <= 800) {
      return {
        right: !menuOpened && "-100%",
      };
    }
  }, [menuOpened]);

  return (
    <section className="h-wrapper">
      <div className="h-container flexCenter paddings innerWidth ">
        <img src={logo} alt="" width={100} />
        <OutsideClickHandler
          onOutsideClick={() => {
            toggleMenuOpened(false);
          }}
        >
          <div className="h-menu flexCenter" style={getMenuStyles()}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <a href="">Contact Us</a>
            <a href="">Get Stardte</a>
            <button className="button">
              <a href="">Contact Us</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => toggleMenuOpened((state) => !state)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
}
