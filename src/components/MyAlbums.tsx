import { BandcampAlbumInterface } from "../types";
import Bandcamp from "./Bandcamp";
import BandcampGrid from "./BandcampGrid";

const albums: BandcampAlbumInterface[] =
  [
    {
      title: 'HEMANDHERE by FUNDAMENTAL.',
      src: 3708205704,
      href: "https://fundamentalmusix.bandcamp.com/album/hemandhere",
    },
    {
      title: 'ROOT: LIVE AT RASOI NOV 4, 2014. by FUNDAMENTAL.',
      src: 3385158988,
      href: "https://fundamentalmusix.bandcamp.com/album/root-live-at-rasoi-nov-4-2014",
    },
    {
      title: 'f. by FUNDAMENTAL.',
      src: 1824150532,
      href: "https://fundamentalmusix.bandcamp.com/album/f",
    },
    {
      title: 'Development by FUNDAMENTAL.',
      src: 2367509230,
      href: "https://fundamentalmusix.bandcamp.com/album/development",
    },
  ]

const MyAlbums = () => <BandcampGrid>{albums.map(a=> <Bandcamp {...a}/>)}</BandcampGrid>


export default MyAlbums;
