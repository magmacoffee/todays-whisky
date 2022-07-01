import { css, Global } from '@emotion/react';
import reset from 'emotion-reset';

const GlobalStyle = () => {
  return (
    <Global
        styles={css`
          ${reset}
          *, *::before, *::after {
            box-sizing: border-box;
            font-family: 'Nanum Gothic', sans-serif; 
          }
        `} 
      />
  )
};

export default GlobalStyle;
