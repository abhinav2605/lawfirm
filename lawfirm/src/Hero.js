import './App.css';
import heroImage from "./images/hero.png"

function Hero() {
  return (
    <div className='heroMain'>
        <div class="heroContainer">
            <p className='heroText'>You don't have to <br/><b>Fight them alone.</b></p>
            <p className='grayText'>Lorem ipsum dolor sit amet consectetur adipiscing elit blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
            <div className='divTalk'>
            <input className="heroInput" placeholder='Enter your email address' type="text"/>
            <button className='heroBtn'>Let's Talk</button>
            </div>
        </div>
        <img src={heroImage} alt=""/>
    </div>
  );
}

export default Hero;
