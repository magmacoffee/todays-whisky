import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import { COMP_PROPS } from 'src/constants/style';

const CardStyle = {
  minHeight: COMP_PROPS.ITEM_MIN_HEIGHT,
  maxHeight: COMP_PROPS.ITEM_MAX_HEIGHT,
}

interface ItemCardProps {
  title: string;
  subtitle: string;
  description: string;
  imgUrl: string;
  onClick?: () => void;
}

const ItemCard = ({title, subtitle, description, imgUrl, onClick} : ItemCardProps) => {

  return (
    <div>
      <a onClick={onClick}>
        <Card style={CardStyle} sx={{ minWidth: COMP_PROPS.ITEM_MIN_WIDTH, maxWidth: COMP_PROPS.ITEM_MIN_WIDTH }}>
          <CardHeader
            title={title}
            subheader={subtitle}
          />
          <CardMedia
            component="img"
            height="194"
            image={imgUrl}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </a>
      
    </div>
  );
};

export default ItemCard;