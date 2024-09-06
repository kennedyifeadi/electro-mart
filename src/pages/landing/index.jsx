import search from "../../assets/Search 1.png";
import heart from "../../assets/love-mobile-ui-svgrepo-com 1.png";
import profile from "../../assets/Profile.png";
import cart from "../../assets/Vector.png";
import laptop from "../../assets/pc 1.png";
import mouse from "../../assets/Mouse-removebg-preview 1.png";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Carousel } from "./components/caruosel";
import "./landing.css";

function Landingpage() {

  return (
    <div className="body">
      <nav>
        <span className="logo">Electro Mart</span>
        <span className="searchBarContainer">
          <div className="dummyfigure3">
            <div></div>
          </div>

          <span className="miniSearchCon">
            <span className="searchBar">
              <img src={search} alt="search icon" />
              <input type="text" placeholder="Search" />
            </span>
          </span>

          <div className="dummyfigure4">
            <div></div>
          </div>
        </span>
        <span className="detailsContainer">
          <span className="miniDtailsCon">
            <div className="dummyfigure5">
              <div></div>
            </div>

            <div className="dummyfigure6">
              <div></div>
            </div>
            <span>
              <img src={heart} alt="" />
            </span>
            <span>
              <img src={cart} alt="" />
            </span>
            <span>
              <img src={profile} alt="" />
            </span>
          </span>
        </span>
      </nav>
      <main>
        <div className="mainDisplay">
          <div className="mainDisplayContent">
            <div className="displayDetails">
              <h1>MacBook Air M1</h1>
              <span>8gb | 256gb | 13-inch</span>
              <p>Apple’s thinnest and lightest notebook.</p>
              <a href="#">Buy Now</a>
            </div>
            <div className="laptopContainer">
              <img src={laptop} alt="" srcset="" />
            </div>
          </div>
        </div>
        <div className="sideDisplay">
          <Carousel />
          {/* <div className="sideDisplayContent1">
            <div className="sideDisplayDetils">
              <h1>
                {slides[3].productName}
              </h1>
              <a href="#">View all</a>
            </div>
            <div className="airPudscontainer" >
              <img src={slides[currentSlide].productImage}  alt="" />
            </div>
          </div> */}
          <div className="sideDisplayContent2">
            <div className="sideDisplayDetils">
              <h1>
                Asus ROG <br /> Mouse
              </h1>
              <a href="#">Shop now</a>
            </div>
            <div className="mousecontainer">
              <img src={mouse} alt="" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="dummyfigure1">
          <div></div>
        </div>
        <div className="dummyfigure2">
          <div></div>
        </div>
        <div className="findmore">
          
          See all <a href="#">prodouct</a>
          <span>
            <BsArrowUpRightCircle className="findMoreIcon" />
          </span>
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;
