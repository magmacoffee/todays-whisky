import { Link } from 'react-router-dom';
import { NavBar, StyledLink } from './Header.styles';
import Logo from 'src/assets/glass-with-wine.png';

interface HeaderProps {
  backColor: string;
}


const Header = ({ backColor = 'transparent' } : HeaderProps) => {
  const navBarStyle = {
    backgroundColor: backColor,
  };
  return (
    <NavBar style={navBarStyle}>
      <Link to='/'>
        <img src={Logo}/>
      </Link>
      <div style={navBarStyle}>
          <StyledLink to='/search'>Search</StyledLink>
          <StyledLink to='/about'>About</StyledLink>
      </div>
    </NavBar>
  );
};

export default Header;

