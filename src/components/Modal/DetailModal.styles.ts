import styled from '@emotion/styled';

const BoxStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '30%',
  padding: '20px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: '24',
};

const Header = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

const Image = styled.img`
  width: 100%;
  min-height: 230px;
  max-height: 230px;
  height: 230px;
  object-fit: cover;
`;

export { BoxStyle, Header, Image };