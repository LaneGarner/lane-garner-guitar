import { useState } from 'react';

export const HeroImage = () => {
  const [loading, setLoading] = useState(true);

  const onLoad = () => {
    setLoading(false);
  };

  return (
    <div>
      {loading && (
        <div
          style={{
            height: '100vh',
            color: 'white',
            display: 'grid',
            placeContent: 'center',
          }}>
          Loading...
        </div>
      )}
      <img
        onLoad={onLoad}
        style={{ width: '100vw', display: loading ? 'none' : 'block' }}
        src="./lane-garner-guitar-pedals.jpeg"
      />
    </div>
  );
};
