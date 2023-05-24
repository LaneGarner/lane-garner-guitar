import '@fontsource/mulish';
import '@fontsource/mulish/800.css';
import '@fontsource/mulish/600.css';
// import "@fontsource/mulish/500.css"

import GuestArtistAlbums from './components/GuestArtistAlbums';
import MyAlbums from './components/MyAlbums';
import Nav from './components/Nav';

const App = () => {
  return (
    <section>
      <Nav />
      <img style={{ width: '100vw' }} src="./lane-garner-guitar-pedals.jpeg" />
      <div
        id="my-music"
        style={{ paddingBlock: '5rem', scrollPaddingTop: '10rem' }}>
        <h2 style={{ color: 'white', textAlign: 'center', fontSize: '3rem' }}>
          Listen to my music
        </h2>
        <MyAlbums />
      </div>
      {/* <h2>Guest artist albums</h2>
      <GuestArtistAlbums/> */}
    </section>
  );
};

export default App;
