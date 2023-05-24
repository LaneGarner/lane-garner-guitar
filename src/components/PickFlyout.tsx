import { useEffect, useRef, useState } from 'react';

interface PickFlyoutProps {
  menuPosition: string;
}

const PickFlyout: React.FC<PickFlyoutProps> = props => {
  const { menuPosition } = props;

  return (
    <ul
      style={{
        backgroundImage: 'url("/pick.svg")',
        backgroundSize: '250px',
        width: '250px',
        height: '297.03px',
        listStyle: 'none',
        paddingLeft: 0,
        padding: '4rem',
        paddingBottom: '6rem',
        transition: 'right 300ms',
        textAlign: 'center',
        position: 'absolute',
        top: '7rem',
        right: menuPosition,
        color: '#333',
      }}>
      <li style={{ paddingBlock: '0.5rem', margin: '0.5rem' }}>
        <a style={{ color: '#333', textDecoration: 'none' }} href="#my-music">
          My music
        </a>
      </li>
      <li style={{ paddingBlock: '0.5rem', margin: '0.5rem' }}>
        <a
          style={{ color: '#333', textDecoration: 'none' }}
          href="https://garnerguitar.com"
          target="_blank"
          rel="noreferer">
          Guitar lessons
        </a>
      </li>
      <li style={{ paddingBlock: '0.5rem', margin: '0.5rem' }}>
        <a style={{ color: '#333', textDecoration: 'none' }} href="#">
          Contact
        </a>
      </li>
    </ul>
  );
};

export default PickFlyout;
