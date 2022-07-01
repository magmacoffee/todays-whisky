import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { COLOR } from 'src/constants/style';

interface Props {
  onClick: () => void;
}

const TopButton = ({ onClick } : Props) => {
  return (
      <a 
        href='javascript:void(0);' 
        onClick={onClick}
        style={{
          color: 'black',
        }}
      >
        <ArrowUpwardIcon 
          style={{ 
            position: 'fixed',
            width: '40px',
            height: '40px',
            bottom: '40px',
            right: '40px',
            zIndex: '1',
            color: COLOR.WHITE,
          }}
        />
      </a>
  );
};

export default TopButton;