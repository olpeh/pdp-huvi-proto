import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = ({ location }) => {
  const linkArray = [
    {
      path: '/',
      name: 'My week',
      iconClasS: 'icon-my-week',
    },
    {
      path: '/inventory',
      name: 'My workwear',
      iconClasS: 'icon-inventory',
    },
    {
      path: '/contact',
      name: 'Communication',
      iconClasS: 'icon-contact',
    },
    {
      path: '/store',
      name: 'Store',
      iconClasS: 'icon-store',
    },
  ];

  return (
    <div className="Footer">
      <div className="Footer-nav">
        {linkArray.map(item => {
          const classes = `Footer-nav-link ${location.pathname === item.path ? 'active' : ''}`;
          const iconClasses = `Footer-nav-link-icon ${item.iconClasS}`;
          return (
            <Link className={classes} to={item.path} key={item.iconClasS}>
              <div className={iconClasses} />
              {item.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Footer;
