import styled from '@emotion/styled';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(100, 100, 100, 0.4);
`;

const Content = styled.div`
  height: 30%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 5px;
  font-size: 55pt;
  flex-direction: column;
`

const LinkButton = {
  width: '140px',
  height: '50px',
  margin: '15px',
  border: '2px solid black',
  color: 'black'
};


export { Container, Content, LinkButton };