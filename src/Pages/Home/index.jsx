import React from "react";
import Navbarr from "../../Components/Navbar";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import globe from "../../Assets/image 4.png";
import { Button } from "react-bootstrap";
import Footer from "../../Components/Footer";
import siteData from '../../siteData.json';

function Home() {
  console.log(siteData.imagePath)
  return (
    <div>
      <Navbarr />

      <div className="heroSection">
        <div className="container">
          <div className="row">
            <div className="col-md-6 leftSection">
              <div className="text">
                <h1>{siteData.Homepage[0].heading}</h1>
                <h3>{siteData.Homepage[0].paragraph}</h3>
                <p>{siteData.Homepage[0].text}</p>
              </div>
              <div className="d-flex mb-4 buttons">
                <button>
                  <img src={siteData.Homepage[0].appstore} alt="" className="img-fluid" />
                </button>
                <button>
                  <img src={siteData.Homepage[0].playstore} alt="" className="img-fluid" />
                </button>
              </div>
            </div>
            <div className="col-md-6 rightSection">
              <div className="modelImage">
                <img src={siteData.Homepage[0].image} alt="" className="img-fluid model" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="featureFunction">
        <div className="container my-5">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center">
              <h2 className="featureHeading text-center m-auto">
                {siteData.Homepage[1].heading}
              </h2>
              <p className="featureText text-center m-auto">
                {siteData.Homepage[1].paragraph}
              </p>
            </div>
            <div className="col-lg-6 text-center ">
              <img className="img-fluid" src={siteData.Homepage[1].image} alt="Model" />
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 text-center ">
              <img
                className="img-fluid order-sm-last order-lastorder-lg-first order-md-last"
                src={siteData.Homepage[2].image}
                alt="Model"
              />
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 text-center order-sm-first order-first order-lg-last order-md-first">
              <h2 className="featureHeading m-auto">{siteData.Homepage[2].heading}</h2>
              <p className="featureText m-auto">
              {siteData.Homepage[2].paragraph}
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0 text-center ">
              <h2 className="featureHeading m-auto">
              {siteData.Homepage[3].heading}
              </h2>
              <p className="featureText m-auto">
              {siteData.Homepage[3].paragraph}
              </p>
            </div>
            <div className="col-lg-6 text-center ">
              <img className="img-fluid" src={siteData.Homepage[3].image} alt="Model" />
            </div>
          </div>
        </div>
      </div>
      <div className="businessSection ">
        <h1>{siteData.Homepage[4].heading}</h1>
        <div class="text-center">
          <img src={siteData.Homepage[4].image} className="img-fluid" alt="" />
        </div>
        <p>
        {siteData.Homepage[4].paragraph}
        </p>
        <div className="text-center">
          <Button variant="mx-auto">Learn more</Button>
        </div>
      </div>
      <div class="joinUs container">
        <div class="row align-items-center">
          <div class="col-sm text-center joinleft">
            <h1>{siteData.Homepage[5].heading}</h1>
            <p className="joinText">
            {siteData.Homepage[5].paragraph}
            </p>
            <p className="text-success mb-4 downloadNow">
            {siteData.Homepage[0].text}
            </p>
            <div className="d-flex mb-4 buttons buttons2">
              <button>
                <img src={siteData.Homepage[0].appstore} alt="" className="img-fluid" />
              </button>
              <button>
                <img src={siteData.Homepage[0].playstore} alt="" className="img-fluid" />
              </button>
            </div>
          </div>
          <div class="col-sm text-center">
            <img src={globe} alt="" className="globe img-fluid" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
