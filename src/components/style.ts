import styled from '@emotion/styled';
import { COLOR, FONT_WEIGHT, HEADER_PROPS } from 'src/constants/style';
import { keyframes } from '@emotion/react';

const Text = {
  H1: styled.h1`
    font-size: 55pt,
    font-weight: ${FONT_WEIGHT.BOLD};
    margin: 10px 0px;
    color: ${({ color }) => color || COLOR.BLACK};
  `,
  H3: styled.h3`
    font-weight: ${FONT_WEIGHT.BOLD};
    font-size: 30pt;
    margin: 3px 0px;
    color: ${({ color }) => color || COLOR.BLACK};
  `,
  H5: styled.h5`
  text-align: center;
  font-weight: ${FONT_WEIGHT.BOLD};
  font-size: 16pt;
  margin: 10px 0px;
  line-height: 30px;
  color: ${({ color }) => color || COLOR.BLACK};
`,
  Title: styled.p`
    font-weight: ${FONT_WEIGHT.BOLD};
    font-size: 28pt;
    margin: 3px 0px;
    color: ${({ color }) => color || COLOR.BLACK};
  `,
  Description: styled.p`
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ color }) => color || COLOR.BLACK};
  `,
  Comment: styled.p`
    width: 70%;
    max-width: 70%;
    font-size: 1.2rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-top: 2px;
    color: ${({ color }) => color || COLOR.BLACK};
  `,
  Highlight: styled.h1`
  font-size: 55pt,
  font-weight: ${FONT_WEIGHT.BOLD},
  margin: 5px 0px;
  color: ${({ color }) => color || COLOR.HIGHLIGHT};
`,
};

const FadeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: none;
  }
`;

const Content = styled.div`
  height: 100%;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-left: ${ HEADER_PROPS.PADDING_HORIZONTAL };
  margin-right: ${ HEADER_PROPS.PADDING_HORIZONTAL };
  margin-top: ${ HEADER_PROPS.REAL_HEIGHT };
  overflow-y: hidden;
  background-color: transparent;
  &::-webkit-scrollbar {
    display: none;
  }
  animation: ${FadeInAnimation};
  animation-duration: 2s;
`;

export { Text, FadeInAnimation, Content };
