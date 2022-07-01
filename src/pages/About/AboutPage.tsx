import { Header } from 'src/components';
import { Content, Text } from 'src/components/style';
import { COLOR } from 'src/constants/style';
import { Icons, ProfileImage, LogoRoundImage } from './AboutPage.styles';

import imgSrc from 'src/assets/GitHub-Mark-32px.png';
import mailSrc from 'src/assets/Mail-Icon-White-on-Black.png';

const AboutPage = () => {
  return (
    <>
      <Header backColor={ COLOR.NAV_NORMAL_PAGE } />
      <Content>
        <ProfileImage src="https://c.pxhere.com/photos/a2/b4/photo-1616922.jpg!d"></ProfileImage>
        <Text.H3>풀스택 개발자 남기환입니다.</Text.H3>
        <br />
        <Text.H5>
          최근에는 2022 관광데이터 활용 공모전(한국관광공사, 카카오 주관)에 
          <br />
          11명의 팀원들과 HEVER라는 이름으로 참가하여 백엔드 리더 역할을 맡고 있습니다.
        </Text.H5>
        <Text.H5>
          같이 소통하고 나누는 것을 좋아해서 알고리즘 스터디도 직접 개설하여 운영 중에 있어요!
        </Text.H5>
        <Icons>
          <a href='https://github.com/magmacoffee'>
            <LogoRoundImage src={imgSrc}></LogoRoundImage>
          </a>
          <a href='mailto:magmacoffees@gmail.com'>
            <LogoRoundImage src={mailSrc}></LogoRoundImage>
          </a>
        </Icons>
        <Icons>
          <img src="https://img.shields.io/badge/Spring Boot-6DB33F?style=flat-square&logo=Spring Boot&logoColor=white"/>
          <img src="https://img.shields.io/badge/Oracle-F80000?style=flat-square&logo=Oracle&logoColor=white"/>
          <img src="https://img.shields.io/badge/MySQL-4479A1?style=flat-square&logo=MySQL&logoColor=white"/>
          <img src="https://img.shields.io/badge/Kubernetes-326CE5?style=flat-square&logo=Kubernetes&logoColor=white"/>
          <img src="https://img.shields.io/badge/Redis-DC382D?style=flat-square&logo=Redis&logoColor=white"/>
        </Icons>
        <Icons>
          <img src="https://img.shields.io/badge/Vue.js-4FC08D?style=flat-square&logo=Vue.js&logoColor=white"/>
          <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
        </Icons>
        <a href='https://noble-confidence-36a.notion.site/16e5c61e7e934f25be91482569008ad2'>
          <Text.H5>저에 대해 더 알고 싶으신가요?</Text.H5>
        </a>
      </Content>
    </>
  );
};

export default AboutPage;