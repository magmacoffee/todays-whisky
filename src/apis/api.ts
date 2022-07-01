import { Cocktail } from './type';
import WineIcon from 'src/assets/wine-icon.png';


const API = {
  getRandomCocktail(): Cocktail {
    const rnd = getRandomNum(0, cocktails.length);
    return cocktails[rnd];
  },
  getRandomCocktails(cnt: number): Cocktail[] {
    const ret: Cocktail[] = [];

    let len = cocktails.length;
    for (let i = 0; i < cnt; i++) {
      const idx = getRandomNum(0, len);
      // swap (랜덤으로 나온 인덱스를 맨 뒤로 보냄)
      const val = randAry[idx];
      randAry[idx] = randAry[len - i - 1];
      randAry[len - i - 1] = val;
      ret.push(cocktails[val]);
      console.log(idx);
      console.log(val);
      len--;
    }
    return ret;
  },
  async getCocktailsAsync(): Promise<Cocktail[]> {
    await sleep(2000);
    return cocktails;
  },
  findCocktailById(id: string): Cocktail {
    for (const cocktail of cocktails) {
      if (cocktail.id == id) {
        return cocktail;
      }
    }
    return undefined;
  },
  toggleFavorite(id: string) {
    const cocktail = API.findCocktailById(id);
    cocktail.favorite = !cocktail.favorite;
    return cocktail.favorite;
  },
}


// max는 포함 안됨. min ~ max - 1의 값 나옴.
function getRandomNum(min : number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms)
);


const cocktails: Cocktail[] = [
  {
    id: '1',
    name: '블루하와이',
    desc: '트로피컬하면 떠오르는 대표적인 칵테일로 럼을 기반으로 한다.',
    img: 'https://c.pxhere.com/photos/e9/69/drink_cocktail_lime_beverage_glass-180295.jpg!d',
    alcohol: 20,
    ingredients: '화이트 럼 22ml, 보드카 22ml, 블루 큐라소 15ml, 파인애플 주스 90ml, 스윗 앤 사워 믹스 30ml',
    favorite: false,
  },
  {
    id: '2',
    name: '깔루아 밀크',
    desc: '달달한 커피맛이 나는 부드러운 칵테일로 리큐르를 베이스로 한다. 도수는 맥주와 비슷하다.',
    img: 'https://cbmpress.sfo2.digitaloceanspaces.com/vlife/1613865410_Z34SUV2y_74d305d184e721b788ac3b80f95aa6f959da13aa.jpg',
    alcohol: 20,
    ingredients: '깔루아 30ml, 우유 90~120ml',
    favorite: false,
  },
  {
    id: '3',
    name: '피냐 콜라다',
    desc: '럼을 베이스로 하며 피냐는 스페인어로 파인애플을 뜻한다.',
    img: 'https://c.pxhere.com/photos/63/68/cocktail_drink_mango_restaurant-1606567.jpg!d',
    alcohol: 10,
    ingredients: '화이트 럼 50ml, 코코넛 크림 30ml, 파인애플 주스 50ml',
    favorite: false,
  },
  {
    id: '4',
    name: '코스모폴리탄',
    desc: '보드카를 베이스로 하며 대표적인 레이디 컬러 칵테일이다.',
    img: WineIcon,
    alcohol: 20,
    ingredients: '보드카 시트론 40ml, 코앵트로 15ml, 라임주스 15ml, 크렌베리 주스 30ml',
    favorite: false,
  },
  {
    id: '5',
    name: '롱아일랜드 아이스티',
    desc: '달콤함으로 위장한 높은 도수의 칵테일이다. 아이스티처럼 갈색 빛을 띠어 아이스티라는 이름이 잘 어울린다.',
    img: 'https://c.pxhere.com/photos/63/68/cocktail_drink_mango_restaurant-1606567.jpg!d',
    alcohol: 35,
    ingredients: '진 15ml, 보드카 15ml, 화이트럼 15ml, 데킬라 15ml, 코엥트로 15ml, 레몬주스 30ml, 심플 시럽 20ml, 콜라 잔 가득',
    favorite: false,
  },
  {
    id: '6',
    name: '마티니',
    desc: '진을 베이스로 하며 칵테일의 왕으로 불린다',
    img: 'https://cdn.pixabay.com/photo/2014/11/27/18/55/martini-548031_960_720.jpg',
    alcohol: 30,
    ingredients: '드라이 진 60ml, 드라이 베르무트 10ml',
    favorite: false,
  },
  {
    id: '7',
    name: '준벅',
    desc: '벌레가 꼬일 정도로 달콤하다고 하여 6월의 벌레라는 뜻으로 붙여진 이름이다. 입문자에게 추천되는 칵테일이다.',
    img: 'https://c.pxhere.com/photos/f1/61/cocktail_drink_refreshment_refreshing_organic_nature_umbrella_drink_bilimbi_drink-1285182.jpg!d',
    alcohol: 13,
    ingredients: '메론 리큐르 30ml, 코코넛 럼 15ml, 바나나 15ml, 레몬주스 30ml, 파인애플 주스 60ml',
    favorite: false,
  },
  {
    id: '8',
    name: '모히또',
    desc: '럼 베이스 칵테일로, 민트의 시원한 청량감에 산뜻한 맛과 시각적으로도 라임과 민트의 초록색이 돋보인다. 달달함과 민트의 씁쓸한 뒷맛이 스쳐간다.',
    img: 'https://c.pxhere.com/photos/88/aa/beverages_citrus_cold_drink_fruit_glass_juice_lime-1554435.jpg!d',
    alcohol: 18,
    ingredients: '화이트 럼 45ml, 민트 6잎, 백설탕 2 티스푼, 라임주스 20ml, 탄산수 잔 가득',
    favorite: false,
  },
  {
    id: '9',
    name: '러스티네일',
    desc: '위스키 베이스로 재료와 레시피가 무척 간단하지만 재료의 질이 중요하여 위스키의 영향을 무척 받는다.',
    img: 'https://noseychef.com/wp-content/uploads/2019/10/IMG_5120123.jpg',
    alcohol: 40,
    ingredients: '스카치 위스키 45ml, 드람뷔 25ml',
    favorite: false,
  },
  {
    id: '10',
    name: '마가리타',
    desc: '잔에 뿌려진 소금과 함께 마시는 데킬라 레몬주스 이다.',
    img: WineIcon,
    alcohol: 30,
    ingredients: '데킬라 45ml, 트리플 섹 15ml, 라임 주스 15ml',
    favorite: false,
  },
  {
    id: '11',
    name: '쿠바 리브레',
    desc: '콜라와 럼만 있으면 쉽게 만들 수 있는 칵테일이다. 술 맛이 살짝나는 상큼한 콜라맛이다.',
    img: WineIcon,
    alcohol: 30,
    ingredients: '화이트 럼 50ml, 라임 주스 10ml, 콜라 120ml',
    favorite: false,
  },
  {
    id: '12',
    name: '피치 크러쉬',
    desc: '복숭아, 레몬, 크렌베리가 섞인 새콤달콤한 과일맛이다.',
    img: WineIcon,
    alcohol: 20,
    ingredients: '피치 시냅스 45ml, 스윗 앤 사워 믹스 60ml, 크렌베리 주스 잔 가득',
    favorite: false,
  },
  {
    id: '13',
    name: '피치 크러쉬',
    desc: '토마토 주스 베이스로 하며 짜고 매콤하며 상큼하다.',
    img: WineIcon,
    alcohol: 15,
    ingredients: '보드카 45ml, 레몬 주스 15ml, 토마토 주스 90ml, 우스터 소스 2 Dashes, 타바스코 소스 기호에 맞게, 샐러리 소금 기호에 맞게, 후추 기호에 맞게',
    favorite: false,
  },
  {
    id: '14',
    name: '진 앤 토닉',
    desc: '속이 뻥 뚫리는 상쾌하고 시원한 맛 나는 꽤 독한 술 이다.',
    img: WineIcon,
    alcohol: 15,
    ingredients: '진 45ml, 토닉워터 잔의 8부까지 채움, 레몬 한 조각',
    favorite: false,
  },
  {
    id: '15',
    name: '미도리사워',
    desc: '메론에 레몬향이 어우러져 초록빛깔에 새콤달콤하다.',
    img: 'https://c.pxhere.com/photos/d5/d4/cocktails_ice_drinks_green_margaritas_cocktail_drink_food-954516.jpg!d',
    alcohol: 10,
    ingredients: '미도리 30ml, 스윗 앤 사워 믹스 30ml, 스프라이트 60ml',
    favorite: false,
  },
  {
    id: '16',
    name: '스크류드라이버',
    desc: '보드카 베이스의 칵테일로 술 맛이 거의 느껴지지 않아 오렌지 주스맛과 크게 다르지 않다.',
    img: 'https://c.pxhere.com/photos/36/10/beverage_delicious_drink_glass_juice_refreshing_refreshment-1572919.jpg!d',
    alcohol: 25,
    ingredients: '보드카 30~45ml, 오렌지 주스 잔 가득',
    favorite: false,
  },
  {
    id: '17',
    name: '핑크레이디',
    desc: '위에 거품이 있어 부드럽고 눅진함과 레몬의 상큼함을 느낄 수 있다.',
    img: 'https://c.pxhere.com/photos/30/4a/drink_cocktail_strawberry_glass_beverage-14582.jpg!d',
    alcohol: 20,
    ingredients: '드라이 진 45ml, 그레나딘 시럽 10ml, 크림 15ml, 달걀 흰자 1개',
    favorite: false,
  },
  {
    id: '18',
    name: '맨하탄',
    desc: '훈연향이 더해진 달콤한 와인의 고급진 맛을 느낄 수 있다.',
    img: 'https://c.pxhere.com/photos/f6/be/glass_martini_cocktail_cocktail_glass_highball_drink_alcohol_alcoholic-824930.jpg!d',
    alcohol: 32,
    ingredients: '라이 위스키 50ml, 스위트 베르무트 20ml, 앙고스투라 비터스 1Dash',
    favorite: false,
  },
  {
    id: '19',
    name: '미모사',
    desc: '사치스러운 오렌지 주스맛이다. 청량감과 부드러움을 두 배로 느낄 수 있다.',
    img: 'https://c.pxhere.com/photos/d1/ec/beach_beverage_citrus_close_up_coconut_tree_colors_daylight_delicious-1549817.jpg!d',
    alcohol: 8,
    ingredients: '샴페인 잔의 반, 오렌지 주스 잔의 반, 앙고스투라 비터스 1Dash',
    favorite: false,
  },
  {
    id: '20',
    name: '블루라군',
    desc: '오렌지와 레몬 조합에 상큼한 탄산음료와 술 맛을 느낄 수 있다.',
    img: 'https://c.pxhere.com/photos/07/53/glass_drinking_cup_light_shadow-969877.jpg!d',
    alcohol: 20,
    ingredients: '보드카 40ml, 블루 큐라소 15ml, 레몬 주스 15ml',
    favorite: false,
  },
];


const randAry = Array(cocktails.length).fill(0).map((v, i) => i);

export default API;