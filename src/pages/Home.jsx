import React from "react";
import "../styles/home.css";
import Subtitle from "../shared/Subtitle";
import SearchBar from "../shared/SearchBar";
import { Container, Row, Col } from "reactstrap";
import worldImg from "../assets/images/world.png";
import heroImg from "../assets/images/hero-img01.jpg";
import ServicesLists from "../services/ServicesLists";
import Newsletter from "../shared/Newsletter";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import experienceImg from "../assets/images/experience.png";
import FeaturedLists from "../components/FeaturedTours/FeaturedTours";
import Testimonials from "../components/Testimonials/Testimonials";
import ManasorayGallaryImages from "../components/ImagesGallary/ManasorayGallaryImages";

const Home = () => {
  return (
    <>
      {/* ==== Hero Section Start ==== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero_content">
                <div className="hero_subtitle d-flex align-items-center">
                  <Subtitle subtitle={"Know Before You Go"} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>
                  Traveling opens the door to creating
                  <span className="highlight">memories</span>
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Autem minima esse deleniti nam officia ratione voluptatum
                  magnam, temporibus sapiente reprehenderit!
                </p>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img_box">
                <img src={heroImg} alt="" />
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img_box mt-4">
                <video src={heroVideo} alt="" controls 
                controlsList="nodownload"/>
              </div>
            </Col>
            <Col lg="2">
              <div className="hero_img_box mt-5">
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>
      {/* ==== Hero Section End ==== */}
      {/* ==== Services Section Start ==== */}
      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServicesLists />
          </Row>
        </Container>
      </section>
      {/* ==== Services Section End ==== */}
      {/* ==== Featured Tour Section Start==== */}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <Subtitle subtitle={"Explore"} />
              <h2 className="featured__tour__title">Our featured tours</h2>
            </Col>
            <FeaturedLists />
          </Row>
        </Container>
      </section>
      {/* ==== Featured Tour Section End ==== */}
      {/* ==== Experience Section Start ==== */}
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="experience__content">
                <Subtitle subtitle={"Experience"} />
                <h2>
                  With our all experience <br /> we will serve you
                </h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facilis, voluptate culpa. Iste quam enim natus! <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Consequatur, asperiores.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull trips</h6>
                </div>
                <div className="counter__box">
                  <span>2k+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experience</h6>
                </div>
              </div>
            </Col>
            <Col lg="6">
              <div className="experience__img">
                <img src={experienceImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==== Experience Section End ==== */}
      {/* ==== Gallery Section End ==== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Gallary"} />
              <h2 className="gallary__title">
                Visit our customers tour gallary
              </h2>
            </Col>
            <Col lg="12">
              <ManasorayGallaryImages />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==== Gallery Section End ==== */}
      {/* ==== Testimonails Section Start ==== */}
      <section>
        <Container>
          <Row>
            <Col lg="12">
              <Subtitle subtitle={"Fans Love"} />
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg="12">
              <Testimonials />
            </Col>
          </Row>
        </Container>
      </section>
      {/* ==== Testimonails Section End ==== */}
      <Newsletter />
    </>
  );
};

export default Home;
