import styled from '@emotion/styled';
import { COLOR } from 'src/constants/style';

const Item = styled.div`
  width: 60vw;
  height: 125px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  padding: 10px;
  img {
    width: 95px;
    min-width: 95px;
    max-width: 95px;
    height: 100%;
    border-radius: 0.5rem;
    object-fit: cover;
    filter: contrast(80%);
  }
  :hover {
    background-color: ${COLOR.ITEM_HOVER}
  }
`;

const Description = styled.div`
  width: 90%;
  max-width: 100%;
  padding: 5px 16px;
`;

export { Item, Description };
