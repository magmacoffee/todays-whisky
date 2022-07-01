import styled from '@emotion/styled';

const Container = styled.div`
  height: 100vh;
  overflow-y: hidden;
  background-color: transparent;
  &::-webkit-scrollbar {
    display: none;
  }
  z-index: 1;
`;

const Background = styled.div`
  object-fit: cover;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
`

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: fill;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -2;
`;

export { Container, Background, Video };