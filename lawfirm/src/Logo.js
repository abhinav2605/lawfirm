import Logo1 from "./images/logo1.png"
import Logo2 from "./images/logo2.png"

function Logo() {
  return <div>
  <img src={Logo1} height={40} alt="logo" />
  <img src={Logo2} height={20} alt="logo" />
  </div>;
}

export default Logo;
