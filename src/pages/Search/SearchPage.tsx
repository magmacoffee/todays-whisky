import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Grid, LinearProgress, Skeleton, ButtonGroup, Button } from '@mui/material';

import API from 'src/apis/api';
import { COLOR, COMP_PROPS } from 'src/constants/style';
import { Header, ItemCard, DetailModal } from 'src/components';
import { Content, ContentHeader } from './SearchPage.styles';
import { Cocktail } from 'src/apis/type';
import { ItemProps } from 'src/components/type';

const SearchPage = () => {

  // for Infinity Scroll & Skeleton loading

  const [cocktailList, setCocktailList] = useState([]);
  const [scrollData, setScrollData] = useState([]);
  const [sortData, setSortData] = useState([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);
  const [isFetching, setIsFetching] = useState(true);
  const [sort, setSort] = useState(false);
  
  // for Cocktail detail Modal
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ItemProps | undefined>();
  const handleClose = () => setOpen(false);

  const FETCH_DATA_CNT = 64;

  const loadScrollData = async() => {
      if (scrollData != undefined) {
        setScrollData(cocktailList?.slice(0, scrollData.length + FETCH_DATA_CNT));
      }
  };
  
  function hasMore() {
    return scrollData?.length < cocktailList?.length;
  };
  
  const handleOnRowsScrollEnd = () => {
    const more = hasMore();
    setHasMoreValue(more);
    if (hasMore()) {
      loadScrollData();
    }
  };

  const fetchCocktailData = async () => {
    setIsFetching(true);
    const data = await API.getCocktailsAsync();
    setCocktailList(data);
    setScrollData(data.slice(0, FETCH_DATA_CNT));
    setIsFetching(false);
  };

  useEffect(() => {
    fetchCocktailData();
  }, []);

  const handleClickItemCard = (index: number) => {
    // Set Modal Data
    const cocktail: Cocktail = scrollData[index];
    if (cocktail != undefined) {
      const prop: ItemProps = {
        id: cocktail.id,
        title: cocktail.name,
        subtitle: '도수 : ' + cocktail.alcohol + '도',
        description: cocktail.desc,
        comment: cocktail.ingredients,
        imgUrl: cocktail.img
      };
      setData(prop);
      // Modal Open
      setOpen(true);
    }
  };

  const handleFavIconClick = (index: number, id: string) => {
    API.toggleFavorite(id);
    fetchCocktailData();
  };

  const onNameSort = () => {
    if (scrollData.length > 0) {
      const ary = scrollData.slice(0, scrollData.length);
      setSortData(
        ary.sort(function(a, b) {
          if (a.name > b.name) {
            return 1;
          } else {
            return -1;
          }
          return 0;
        })
      );
      setSort(true);
    }
  };

  const onAlcoholSort = () => {
    if (scrollData.length > 0) {
      const ary = scrollData.slice(0, scrollData.length);
      setSortData(
        ary.sort(function(a, b) {
          if (a.alcohol > b.alcohol) {
            return 1;
          } else {
            return -1;
          }
          return 0;
        })
      );
      setSort(true);
    }
    
  };

  const onClickClear = () => {
    setSort(false);
  };

  return (
    <>
      <Header backColor={ COLOR.NAV_NORMAL_PAGE } />

      <ContentHeader>
        <ButtonGroup variant="outlined" aria-label="outlined button group">
            <Button onClick={onNameSort}>이름</Button>
            <Button onClick={onAlcoholSort}>도수</Button>
            <Button onClick={onClickClear}>초기화</Button>
        </ButtonGroup>
      </ContentHeader>

      <Content>
        {sort ? (
          <Grid container spacing={3}>
          {sortData.map((cocktail, index) => {
            return (
              <Grid key={index} item>
                <ItemCard
                  id={cocktail?.id}
                  title={cocktail?.name}
                  subtitle={`도수 : ${cocktail?.alcohol}`}
                  description={cocktail?.desc}
                  imgUrl={cocktail?.img}
                  favorite={cocktail?.favorite}
                  onClick={() => {handleClickItemCard(index)}}
                  onFavClick={(e) => { e.stopPropagation(); handleFavIconClick(index, cocktail.id);}}
                />
              </Grid>
            )
          })}
        </Grid>
        ) : (
          <InfiniteScroll
            dataLength={scrollData.length}
            next={handleOnRowsScrollEnd}
            hasMore={hasMoreValue}
            scrollThreshold={1}
            loader={<LinearProgress />}
            style={{ overflow: 'unset' }}
          >
            <Grid container spacing={3}>
              {scrollData.map((cocktail, index) => {
                return (
                  <Grid key={index} item>
                    <ItemCard
                      id={cocktail?.id}
                      title={cocktail?.name}
                      subtitle={`도수 : ${cocktail?.alcohol}`}
                      description={cocktail?.desc}
                      imgUrl={cocktail?.img}
                      favorite={cocktail?.favorite}
                      onClick={() => {handleClickItemCard(index)}}
                      onFavClick={(e) => { e.stopPropagation(); handleFavIconClick(index, cocktail.id);}}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </InfiniteScroll>
        )}
        {/* Show skeleton when fetching data */}
        {isFetching && 
          <Grid container spacing={3}>
            {
              Array.from(new Array(FETCH_DATA_CNT)).map((item, index) => (
                <Grid key={index} item>
                  <Skeleton 
                    variant='rectangular' 
                    height={COMP_PROPS.ITEM_MIN_HEIGHT} 
                    width={COMP_PROPS.ITEM_MIN_WIDTH}
                    />
                </Grid>  
              ))
            }
          </Grid>
        }
      </Content>
      <DetailModal
        open={open}
        onClose={handleClose}
        data={data}
      />
    </>
  );
};

export default SearchPage;