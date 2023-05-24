import { BandcampAlbumInterface } from '../types';

const Bandcamp: React.FC<BandcampAlbumInterface> = props => {
  const a = props;
  return (
    <>
      <iframe
        style={{
          border: 0,
          borderRadius: '1.5rem',
          width: '350px',
          height: '720px',
        }}
        src={`https://bandcamp.com/EmbeddedPlayer/album=${a.src}/size=large/bgcol=333333/linkcol=ffffff/transparent=true/`}
        seamless>
        <a href={a.href}>{a.title}</a>
      </iframe>
    </>
  );
};

export default Bandcamp;
