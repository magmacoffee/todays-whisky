import { Container } from './styles';
import API from 'src/apis/api';

const RecommendList = () => {

  const cocktail = API.getRandomCocktail();

  return (
    <Container>
      {cocktail.name}
    </Container>
  );
};

export default RecommendList;