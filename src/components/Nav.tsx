import { useEffect, useRef, useState } from 'react';
import PickFlyout from './PickFlyout';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState('-300px');

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  useEffect(
    () => (isMenuOpen ? setMenuPosition('0px') : setMenuPosition('-300px')),
    [isMenuOpen],
  );

  return (
    <nav
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        backgroundColor: '#333',
        paddingBlock: '1.375rem',
        paddingInline: '2.375rem',
        borderRadius: '3rem',
        width: 'calc(100% - 2rem)',
        top: '2rem',
        marginInline: '1rem',
        opacity: '0.9',
        backdropFilter: 'blur(5px)',
      }}>
      <img
        src="./lane-garner-guitar.jpeg"
        style={{ position: 'fixed', width: '8rem', borderRadius: '50%' }}
      />
      <h1
        style={{
          color: 'white',
          fontSize: '2rem',
          paddingInlineStart: '9.5rem',
        }}>
        Lane Garner <span style={{ paddingInline: '0.25rem' }}>🎸</span>{' '}
        <span style={{ fontWeight: '600' }}>guitarist</span>{' '}
      </h1>
      <button
        onClick={toggleMenu}
        style={{
          backgroundColor: 'inherit',
          border: 'none',
          cursor: 'pointer',
        }}>
        <svg viewBox="0 0 100 80" width="40" height="40">
          <rect fill="white" width="100" height="10"></rect>
          <rect fill="white" y="30" width="100" height="10"></rect>
          <rect
            fill="white"
            y="60"
            width="100"
            height="10"
            // transform={'rotate(45)'}
          ></rect>
        </svg>
      </button>
      <PickFlyout menuPosition={menuPosition} />
    </nav>
  );
};

export default Nav;
