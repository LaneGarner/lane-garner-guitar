import { BandcampAlbumInterface } from '../types'

const style = {
  display: 'flex',
  gap: '3rem',
  flexWrap: 'wrap',
  justifyContent: 'center',
  maxWidth: '90%',
  margin: 'auto',
  paddingBlock: '3rem'
}

const BandcampGrid: React.FC = (props) => {
  const {children} = props;

  return (
    <div style={style}>
      {children}  
    </div>
  )
}


export default BandcampGrid;
