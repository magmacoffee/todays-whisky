import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Text } from 'src/components/style';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { ItemProps } from 'src/components/type';
import { BoxStyle, Header, Image } from './DetailModal.styles';

interface Props {
  open: boolean;
  onClose: () => void;
  data?: ItemProps;
}

const DetailModal = ({ open, onClose, data } : Props) => {
   return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={BoxStyle}>
        <Header>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </Header>
        <Image src={data?.imgUrl} />
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <Text.H3>{data?.title}</Text.H3>
        </Typography>
        <Typography>
          {data?.subtitle}
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          {data?.description}
        </Typography>
        <Typography style={{ marginTop: '10px' }}>
          {data?.comment}
        </Typography>
      </Box>
    </Modal>
   );
};

export default DetailModal;