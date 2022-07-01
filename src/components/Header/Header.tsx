import { Link } from 'react-router-dom';
import { NavBar, Button } from './Header.styles';
import Logo from 'src/assets/glass-with-wine.png';

interface HeaderProps {
  backColor: string;
}

const LinkStyle = {
  textDecoration: 'none',
  color: 'black'
};

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
        <Link to='/search' style={LinkStyle}>
          <Button>Search</Button>
        </Link>
        <Link to='/about' style={LinkStyle}>
          <Button>About</Button>
        </Link>
      </div>
    </NavBar>
  );
};

export default Header;

