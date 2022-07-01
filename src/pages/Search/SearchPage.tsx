import { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { CircularProgress, Grid, LinearProgress, Skeleton } from '@mui/material';

import API from 'src/apis/api';
import { COLOR, COMP_PROPS } from 'src/constants/style';
import { Header, ItemCard, DetailModal } from 'src/components';
import { Content } from 'src/components/style';
import { Cocktail } from 'src/apis/type';
import { ItemProps } from 'src/components/type';

const SearchPage = () => {

  // for Infinity Scroll & Skeleton loading
  const [cocktailList, setCocktailList] = useState([]);
  const [scrollData, setScrollData] = useState([]);
  const [hasMoreValue, setHasMoreValue] = useState(true);
  const [isFetching, setIsFetching] = useState(true);

  // for Cocktail detail Modal
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<ItemProps | undefined>();
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

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

  return (
    <>
      <Header backColor={ COLOR.NAV_NORMAL_PAGE } />
      <Content>
        {scrollData ? (
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
                      title={cocktail?.name}
                      subtitle={`도수 : ${cocktail?.alcohol}`}
                      description={cocktail?.desc}
                      imgUrl={cocktail?.img}
                      onClick={() => {handleClickItemCard(index)}}
                    />
                  </Grid>
                )
              })}
            </Grid>
          </InfiniteScroll>
        ) : (
          <></>
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