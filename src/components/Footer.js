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
          let classes = `Footer-nav-link ${location.pathname === item.path ? 'active' : ''}`;
          if (location.pathname.indexOf('chat') !== -1 && item.path === '/contact') {
            classes = 'Footer-nav-link active';
          }
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
