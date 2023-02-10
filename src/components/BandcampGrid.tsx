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

interface Props {
  children?: React.ReactNode
};

const BandcampGrid: React.FC<Props> = (props) => {

  return (
    <div style={{
      display: 'flex',
      gap: '3rem',
      flexWrap: 'wrap',
      justifyContent: 'center',
      maxWidth: '90%',
      margin: 'auto',
      paddingBlock: '3rem'
    }}>
      {props.children}  
    </div>
  )
}


export default BandcampGrid;
