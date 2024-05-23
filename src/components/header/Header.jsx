import { useRef, useEffect } from "react";
import "../../styles/header.css";
import logo from "../../assets/img/dumble.png";

const nav__menus = [
  { path: "#home", display: "Home" },
  { path: "#schedule", display: "Schedule" },
  { path: "#classes", display: "Classes" },
  { path: "#pricing-plan", display: "Pricing" },
];

const Header = () => {
  const headerRef = useRef(null);

  const headerFunc = () => {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      headerRef.current.classList.add("sticky__header");
    } else {
      headerRef.current.classList.remove("sticky__header");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", headerFunc);

    return () => window.removeEventListener("scroll", headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();

    const targetAttr = e.target.getAttribute("href");
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };
  return (
    <header className="header" ref={headerRef}>
      <div className="container">
        <div className="nav__wrapper">
          {/* ==========logo =-====== */}
          <div className="logo">
            <div className="logo_img">
              <img src={logo} alt="" />
            </div>
            <h2>Fit-body</h2>
          </div>

          {/* ========= navigation menu ======== */}
          <div className="navigation">
            <ul className="menu">
              {nav__menus.map((menu) => (
                <li className="nav__item">
                  <a onClick={handleClick} href={menu.path}>
                    {menu.display}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/*======navigation right ========== */}
          <div className="nav__right">
            <button className="register__btn">Register</button>
            <span className="mobile__menu">
              <i class="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
