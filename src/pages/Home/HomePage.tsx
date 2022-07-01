import { useRef, useEffect, useState } from 'react';

import { Header, TopButton } from 'src/components';
import { COLOR } from 'src/constants/style';
import { Container, Video } from './HomePage.styles'; 
import videoSrc from 'src/assets/pexels-roman-odintsov-5657050.mp4';

import {
  Introduce,
  RecommendOne,
  RecommendList,
} from './components';


const HomePage = () => {

  // 휠 이벤트 과다 방지 용
  let timer: NodeJS.Timeout;

  const [showUpBtn, setShowUpBtn] = useState(false);

  const containerRef = useRef<HTMLDivElement>();
  function isScrollDown(deltaY: number) {
    return deltaY > 0;
  };

  function getCurrentPageIndex(scrollTop: number, height: number) {
    if (scrollTop >= 0 && scrollTop < height) {
      return 1;
    } else if (scrollTop >= height && scrollTop < height) {
      return 2;
    }
    return 3;
  };

  function moveScroll(scrollDown: boolean, pageIndex: number) {
    const pageHeight = window.innerHeight;
    const height = scrollDown ? pageHeight : 0;
    const top = height * pageIndex; 
    containerRef.current.scrollTo({
      top: top,
      left: 0,
      behavior: 'smooth',
    });
    return top;    
  }



  const wheelHandler = (e: WheelEvent) => {
    e.preventDefault();

    // 로직 과다 실행 방지 debouncing
    clearTimeout(timer);
    timer = setTimeout(() => {
      const { deltaY } = e;
      const { scrollTop } = containerRef.current;
      const pageHeight = window.innerHeight;

      const newTop = moveScroll(isScrollDown(deltaY), getCurrentPageIndex(scrollTop, pageHeight));
      // 현재 페이지가 첫번째 페이지가 아니면 위로 올라가기 버튼 표시
      setShowUpBtn(getCurrentPageIndex(newTop, pageHeight) != 1);
    }, 200); // 0.2s
  };

  useEffect(() => {
    const refCurrent = containerRef.current;
    if (refCurrent) {
      refCurrent.addEventListener('wheel', wheelHandler);
    }
    return () => {
      refCurrent?.removeEventListener('wheel', wheelHandler);
    };
  }, []);

  const handleClickTopButton = () => {
    moveScroll(false, 1);
    setShowUpBtn(false);
  };

  return (
    <>
      <Header backColor={COLOR.NAV_MAIN_PAGE} />
      <Container ref={containerRef}>
        <Introduce />
        <RecommendOne />
        <RecommendList />
      </Container>
      { showUpBtn && <TopButton onClick={handleClickTopButton} /> }
      <Video loop muted autoPlay>
        <source src={videoSrc} type='video/mp4' />
      </Video>
    </>
  );
};

export default HomePage;