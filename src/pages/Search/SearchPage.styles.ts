import styled from '@emotion/styled';
import { HEADER_PROPS } from 'src/constants/style';
import { FadeInAnimation } from 'src/components/style';

const ContentHeader = styled.div`
  display: flex;
  margin-top: calc(${ HEADER_PROPS.REAL_HEIGHT } + 10px);
  justify-content: flex-end;
  margin-right: calc( ${ HEADER_PROPS.PADDING_HORIZONTAL } + 15px);
`;

const Content = styled.div`
  height: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: ${ HEADER_PROPS.PADDING_HORIZONTAL };
  margin-right: ${ HEADER_PROPS.PADDING_HORIZONTAL };
  margin-top: calc(${ HEADER_PROPS.REAL_HEIGHT } - 80px);
  overflow-y: hidden;
  background-color: transparent;
  &::-webkit-scrollbar {
    display: none;
  }
  animation: ${FadeInAnimation};
  animation-duration: 2s;
`;

export { ContentHeader, Content };