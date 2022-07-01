import { Container, Content, } from './styles';
import API from 'src/apis/api';
import { Item } from 'src/components';
import { Text } from 'src/components/style';

const Introduce = () => {

  const cocktail = API.getRandomCocktail();

  return (
    <Container>
      <Content>
        <Text.H1>오늘 같은 날엔...</Text.H1>
        <Item
          id={cocktail.id}
          title={cocktail.name}
          subtitle={`도수 : ${cocktail.alcohol}도`}
          description={cocktail.desc}
          comment={cocktail.ingredients}
          imgUrl={cocktail.img}
        />
      </Content>
    </Container>
  );
};

export default Introduce;