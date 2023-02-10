import { BandcampAlbumInterface } from '../types'
import Bandcamp from './Bandcamp';
import BandcampGrid from './BandcampGrid';

const albums: BandcampAlbumInterface[] =
  [
    {
      title: 'Before This by Brian Lambert',
      src: 2300153906,
      href: "https://theble.bandcamp.com/album/before-this",
    },
  ]

const GuestArtistAlbums = () => {
  return (
    <BandcampGrid>
      {albums.map(a=> <Bandcamp {...a} />)}
    </BandcampGrid>
  )
}


export default GuestArtistAlbums;
