import styled from '@emotion/styled';
import { HEADER_PROPS } from 'src/constants/style';  

const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  color: 'black';
  width: 100%;
  opacity: 0.9;
  height: ${HEADER_PROPS.HEIGHT};
  position: fixed;
  top: 0px;
  padding-top: ${HEADER_PROPS.PADDING_VERTICAL};
  padding-bottom: ${HEADER_PROPS.PADDING_VERTICAL};
  padding-left: ${HEADER_PROPS.PADDING_HORIZONTAL};
  padding-right: ${HEADER_PROPS.PADDING_HORIZONTAL};
  transition: 0.5s;
  z-index: 30;
`;

const Button = styled.a`
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  color: 'black';
  &:hover {
    border-bottom: 1px solid;
  }
`;

export { NavBar, Button };