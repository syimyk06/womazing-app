import { Link, NavLink } from 'react-router-dom';
import './Header.scss';
import logo from '../../assets/img/logo.svg';
import phone from '../../assets/img/phone.svg';
import shoppingBag from '../../assets/img/shopping-bag.svg';

export const Header = () => {
  return (
    <>
      <header className="header" id="header">
        <div className="container">
          <div className="header__container">
            <Link to="/" className="header__logo">
              <img src={logo} alt="" />
              WOMAZING
            </Link>
            <nav className="header__nav">
              <NavLink to="/" className="header__link">
                Главная
              </NavLink>
              <NavLink to="/catalog" className="header__link">
                Магазин
              </NavLink>
            </nav>
          </div>
          <nav className="header__contact">
            <NavLink to="/" className="header__link header__contact_phone">
              <img src={phone} alt="" />
              +7 (495) 823-54-12
            </NavLink>
            <NavLink to="/products" className="header__link">
              <img src={shoppingBag} alt="" />
            </NavLink>
          </nav>
        </div>
      </header>
    </>
  );
};
