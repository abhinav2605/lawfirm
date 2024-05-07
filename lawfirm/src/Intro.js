import "./App.css";
import one from "./images/one.jpeg";
import two from "./images/two.jpeg";
import three from "./images/three.jpeg";
import four from "./images/four.jpeg";
import five from "./images/five.jpeg";
import six from "./images/six.jpeg";


function Intro() {
  return (
    <>
      <div className="heroMain">
        <p className="heroText">
          Let's Introduce
          <br /> Ourselves
        </p>
        <div className="heroContainer">
          <h1>Criminal Lawyer</h1>
          <p className="grayText">
            Amet minim mollit non deserunt ullamco <br />
            est sit aliqua dolor do amet sint. Velit officia <br />
            consequatduis enim velit mollit Exercitation.
          </p>
        </div>
      </div>
      <h1 className="center">
        <strong>Why Choose us?</strong>
      </h1>
      <div className="flexcontainer">
        <div class="card">
          <h2>98% Success Rate</h2>
          <p className="grayText">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="heroBtn">Read More</button>
        </div>
        <div class="card">
          <h2>98% Success Rate</h2>
          <p className="grayText">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="heroBtn">Read More</button>
        </div>
        <div class="card">
          <h2>98% Success Rate</h2>
          <p className="grayText">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequatduis enim velit mollit Exer.
          </p>
          <button className="heroBtn">Read More</button>
        </div>
      </div>
      <h1 className="center">
        <strong>Area of Practices</strong>
        <div className="grid">
            <div className="one"><p className="imgtitle">REAL ESTATE LAW</p><img src={one} alt="one"/></div>
            <div className="two"><p className="imgtitle">BUSINESS LAW</p><img src={two} alt="two"/></div>
            <div className="three"><p className="imgtitle">PARTNERSHIP LAW</p><img src={three} alt="three"/></div>
            <div className="four"><p className="imgtitle">REAL ESTATE LAW</p><img src={four} alt="four"/></div>
            <div className="five"><p className="imgtitle">LANDLORD DISPUTES</p><img src={five} alt="five"/></div>
            <div className="six"><p className="imgtitle">ELDER ABUSE</p><img src={six} alt="six"/></div>

        </div>
      </h1>
      <h1>What says our <br/>happy Clients</h1>
    </>
  );
}

export default Intro;
