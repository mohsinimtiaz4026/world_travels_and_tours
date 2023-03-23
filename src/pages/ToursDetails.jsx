import "../styles/tour-details.css";
import tourData from "../assets/data/tours";
import { useParams } from "react-router-dom";
import calculateAvgRating from "../utils/avgRating";
import Newsletter from "../shared/Newsletter";
import { ToastContainer, toast } from "react-toastify";
import React, { useRef, useState } from "react";
import avatar from "../assets/images/avatar.jpg";
import Booking from "../components/Booking/Booking";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";

const ToursDetails = () => {
  const { id } = useParams();
  const ReviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);
  const tour = tourData.find((tour) => tour.id === id);

  const {
    photo,
    title,
    desc,
    address,
    distance,
    price,
    reviews,
    city,
    maxGroupSize,
  } = tour;

  const { totalRating, avgRating } = calculateAvgRating(reviews);

  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = ReviewMsgRef.current.value;
    toast(`${reviewText},${tourRating}`);
  };

  return (
    <>
      <section>
        <ToastContainer />
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>
                  <span className="tour__rating d-flex align-items-center gap-1">
                    <i
                      className="ri-star-s-fill"
                      style={{ color: "var(--secondary-color)" }}
                    />
                    {avgRating === 0 ? null : avgRating}
                    {totalRating === 0 ? (
                      "Not rated"
                    ) : (
                      <span>({reviews.length})</span>
                    )}
                  </span>

                  <span>
                    <i className="ri-map-pin-fill"></i> {address}{" "}
                  </span>
                  <div className="d-flex align-items-center gap-5">
                    <div className="tour__extra__details">
                      <span>
                        <i className="ri-map-pin-2-line"></i> {city}
                      </span>
                      <span>
                        <i className="ri-money-dollar-circle-line"></i> ${price}{" "}
                        / per person
                      </span>
                      <span>
                        <i className="ri-map-pin-time-line"></i> {distance} k/m
                      </span>
                      <span>
                        <i className="ri-group-line"></i> {maxGroupSize} people
                      </span>
                    </div>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>
                {/* ==== tour reviews section start */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews?.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      <span onClick={() => setTourRating(1)}>
                        1 <i className="ri-star-s-fill" />
                      </span>
                      <span onClick={() => setTourRating(2)}>
                        2 <i className="ri-star-s-fill" />
                      </span>
                      <span onClick={() => setTourRating(3)}>
                        3 <i className="ri-star-s-fill" />
                      </span>
                      <span onClick={() => setTourRating(4)}>
                        4 <i className="ri-star-s-fill" />
                      </span>
                      <span onClick={() => setTourRating(5)}>
                        5 <i className="ri-star-s-fill" />
                      </span>
                    </div>
                    <div className="review__input">
                      <input
                        type="text"
                        ref={ReviewMsgRef}
                        placeholder="share your thougths"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>
                  <ListGroup className="user_reviews">
                    {reviews?.map((review) => {
                      return (
                        <div className="review__item">
                          <img src={avatar} alt="" />

                          <div className="w-100">
                            <div className="d-flex align-items-center justify-content-between">
                              <div>
                                <h5>raj</h5>
                                <p>
                                  {new Date("03-02-2023").toLocaleDateString(
                                    "en-US",
                                    options
                                  )}
                                </p>
                              </div>
                              <span className="d-flex align-items-center">
                                5 <i className="ri-star-s-fill"></i>
                              </span>
                            </div>
                            <h6>Amazing tour</h6>
                          </div>
                        </div>
                      );
                    })}
                  </ListGroup>
                </div>
                {/* ==== tour reviews section end */}
              </div>
            </Col>
            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter />
    </>
  );
};

export default ToursDetails;
