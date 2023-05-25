import { useEffect, useRef, useState } from 'react';

interface PickFlyoutProps {
  menuPosition: string;
}

const navItems = [
  { name: 'Music', href: '#my-music' },
  { name: 'Lessons', href: 'https://garnerguitar.com', newTab: true },
  { name: 'Contact', href: '#' },
];

const PickFlyout: React.FC<PickFlyoutProps> = props => {
  const { menuPosition } = props;

  return (
    <ul
      style={{
        backgroundImage: 'url("/pick.svg")',
        backgroundSize: '180px',
        width: '180px',
        height: '213px',
        listStyle: 'none',
        paddingLeft: 0,
        paddingTop: '1rem',
        transition: 'right 300ms',
        textAlign: 'center',
        position: 'fixed',
        top: '9rem',
        right: menuPosition,
        color: '#333',
      }}>
      {navItems.map((item, i) => (
        <li
          key={i}
          style={{
            paddingBlock: '0.5rem',
            margin: '0.5rem',
            fontWeight: 'bold',
          }}>
          <a
            style={{ color: '#333', textDecoration: 'none' }}
            href={item.href}
            target={item.newTab ? '_blank' : undefined}
            rel={item.newTab ? 'noreferer' : undefined}>
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default PickFlyout;
