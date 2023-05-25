import { useState } from 'react';

export const NavImage = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ||
        (!loading && (
          <div
            style={{
              position: 'fixed',
              height: '8rem',
              width: '8rem',
              backgroundColor: '#444444',
              borderRadius: '50%',

              display: 'grid',
              placeContent: 'center',
            }}
          />
        ))}

      <img
        onLoad={() => setLoading(false)}
        src="./lane-garner-guitar.jpeg"
        style={{
          position: 'fixed',
          width: '8rem',
          borderRadius: '50%',
          display: loading ? 'none' : 'block',
        }}
      />
    </>
  );
};
