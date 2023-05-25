import { useEffect, useState } from 'react';
import PickFlyout from './PickFlyout';
import { NavImage } from './NavImage';

const MENU_POSITION = '1rem';
const OFFSCREEN_MENU = '-300px';

const Nav = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(OFFSCREEN_MENU);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  useEffect(() => {
    const resetMenu = () => {
      if (isMenuOpen) toggleMenu();
    };
    document.addEventListener('scroll', resetMenu);

    return () => {
      document.removeEventListener('scroll', resetMenu);
    };
  }, []);

  useEffect(() => {
    isMenuOpen
      ? setMenuPosition(MENU_POSITION)
      : setMenuPosition(OFFSCREEN_MENU);
  }, [isMenuOpen]);

  return (
    <nav>
      <div
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
        <NavImage />
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
      </div>
      <PickFlyout menuPosition={menuPosition} />
    </nav>
  );
};

export default Nav;
