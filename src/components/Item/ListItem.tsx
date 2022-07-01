import { Item, Description } from './ListItem.styles';
import { Text } from '../style';
import { useState } from 'react';
import { ItemProps } from 'src/components/type';
import { DetailModal } from 'src/components';

const ListItem = ({ id, title, subtitle, description, comment, imgUrl } : ItemProps) => {
  
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
      <div>
        <a onClick={handleOpen}>
          <Item>
            <img src={imgUrl} loading='lazy' />
            <Description>
              <Text.H3>
                {title}
              </Text.H3>
              <Text.Description>
                {description}
              </Text.Description>
              <Text.Comment>
                {comment}
              </Text.Comment>
            </Description>
          </Item>
        </a>
        <DetailModal
          open={open}
          onClose={handleClose}
          data={{
            id: id,
            title: title,
            subtitle: subtitle,
            description: description,
            comment: comment,
            imgUrl: imgUrl
          }}
        />
      </div>
  );
};

export default ListItem;