import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { Text } from 'src/components/style';
import Typography from '@mui/material/Typography';
import { ItemProps } from 'src/components/type';
import { BoxStyle, Image } from './DetailModal.styles';

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
        <Image src={data?.imgUrl} />
        <Text.H3>{data?.title}</Text.H3>
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