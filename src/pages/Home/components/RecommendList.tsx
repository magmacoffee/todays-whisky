import { Container } from './styles';
import { Grid, Snackbar, Alert } from '@mui/material';
import { ItemCard } from 'src/components';
import { useEffect, useState } from 'react';

import API from 'src/apis/api';

const RecommendList = () => {

// for snackbar
const [snackbarOpen, setSnackbarOpen] = useState(false);

const [cocktailList, setCocktailList] = useState([]);

  const handleFavIconClick = (index: number, id: string) => {
    API.toggleFavorite(id);
    fetchRandomCocktailData();
    setSnackbarOpen(true);
  };

  const fetchRandomCocktailData = () => {
    const data = API.getRandomCocktails(3);
    setCocktailList(data);
  };

  const handleSnackClose = () => {
    setSnackbarOpen(false);
  }

  useEffect(() => {
    fetchRandomCocktailData();
  }, [])

  return (
    <Container>
      <Grid 
        container
        spacing={5}
        direction='row'
        alignItems='center'
        justifyContent='center'
      >
        {cocktailList.map((cocktail, index) => {
            return (
              <Grid key={index} item>
                <ItemCard
                    id={cocktail?.id}
                    title={cocktail?.name}
                    subtitle={`도수 : ${cocktail?.alcohol}`}
                    description={cocktail?.desc}
                    imgUrl={cocktail?.img}
                    favorite={cocktail?.favorite}
                    onFavClick={() => {handleFavIconClick(index, cocktail.id);}}
                  />
              </Grid>
            )
          }
        )}
      </Grid>
      <Snackbar open={snackbarOpen} autoHideDuration={6000} onClose={handleSnackClose}>
        <Alert onClose={handleSnackClose} severity="success" sx={{ width: '100%' }}>
          저장 되었습니다!
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default RecommendList;