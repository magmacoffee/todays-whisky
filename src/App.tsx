import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PATH from './constants/path';
import GlobalStyles from './styles/global';

import {
  HomePage,
  SearchPage,
  AboutPage
} from './pages';

function App() {
  return (
      <>
        <GlobalStyles />
        <BrowserRouter>
          <Routes>
            <Route path={PATH.HOME} element={<HomePage />} />
            <Route path={PATH.SEARCH} element={<SearchPage />} />
            <Route path={PATH.ABOUT} element={<AboutPage />} />
          </Routes>
        </BrowserRouter>
      </>
  );
}

export default App;
