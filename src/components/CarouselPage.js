import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./style.css";
import { data } from "../data/data";


function CarouselPage() {

  return (
    <div className='carousel-container'>
      <div className="top">
        <h1 className="Trending"> Trending</h1>
        <h1>Projects</h1>
      </div>
      <Carousel
        autoPlay={true}
        showThumbs={true}
        showStatus={false}
        infiniteLoop
        useKeyboardArrows
        transitionTime={500}
        className="carousel"
        centerMode
        centerSlidePercentage={35}
        itemsToShow={3}
      >
        {
          data.map((ele, index) => {
            return (
              <div className="slide-holder" key={index}>
                <div>
                  <img src={ele.Thumbnail} alt="" />
                </div>
                <div className="sub-div" >
                  <p>{ele.projectname}</p>
                  <p>{ele.address}</p>
                  <p>{ele.price}</p>
                  <button>Know more</button>
                </div>
              </div>
            )
          })
        }
      </Carousel>
      </div>
  )
}

export default CarouselPage;
