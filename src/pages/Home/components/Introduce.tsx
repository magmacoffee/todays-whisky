import { Container, Content, LinkButton } from './styles';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { COLOR } from 'src/constants/style';

const spanWhite = {
  color: COLOR.BLACK,
  margin: '5px 0px',
}

const spanHighlight = {
  color: COLOR.HIGHLIGHT ,
}

const Introduce = () => {
  return (
    <Container>
      <Content>
        <span style={ spanWhite }>나에게 맞는 </span>
        <span style={ spanWhite }>
          <span style={ spanHighlight }>칵테일</span>을 찾아보세요
        </span>
        <Button component={Link} to='/search' variant='outlined' style={LinkButton}>
          찾아보기
        </Button>
      </Content>
    </Container>
  );
};

export default Introduce;