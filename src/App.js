import Pages from "./pages/Pages";
import Category from "./components/Category";
import { BrowserRouter as Router} from 'react-router-dom'
import Search from "./components/Search";
import styled from "styled-components";
import { Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav>
          <Logo to={'/'}><img src={'/images/logo.png'} alt="kepecske" /></Logo>
          <Search />
        </Nav>
        
        <Category />
        <Pages />
      </div>
    </Router>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400; 
  font-family: 'Lobster Two', cursive;
`

const Nav = styled.div`
  padding: 2rem 0rem;
  display: flex;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  svg {
    font-size: 1.3rem;
  }
`

export default App;
