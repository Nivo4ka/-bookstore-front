import React from 'react';
import { StyledFooter } from '../../styles/Footer.styles';
import logo2 from '../../images/logo2.svg';
import map from '../../images/map.svg';

const Footer = () => {
  return (
    <StyledFooter>
      <div className='styled__footer--container'>
        <div>
          <img src={logo2} alt='logo'></img>
          <p>tranthuy.nute@gmail.com</p>
          <p>(480) 555-0103</p>
        </div>
        <ul>
          <li>
            <a>Home Page</a>
          </li>
          <li>
            <a>Catalog</a>
          </li>
          <li>
            <a>My Account</a>
          </li>
          <li>
            <a>Cart</a>
          </li>
        </ul>
        <div>
          <p>6391 Elgin St. Celina, Delaware 10299</p>
          <img src={map} alt='map'></img>
        </div>
      </div>
    </StyledFooter>
  );
}

export default Footer;
