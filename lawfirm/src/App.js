import logo from './logo.svg';
import './App.css';
import Logo from './Logo';
import Menu from './Menu';
import Button from './Button';
import Hero from './Hero';
import Intro from './Intro';

function App() {
  return (
    <>
    <div className="Nav">
      <Logo />
      <Menu />
      <Button />
    </div>
    <div className=''>
      <Hero/>
      <Intro/>
    </div>
    </>
  );
}

export default App;
