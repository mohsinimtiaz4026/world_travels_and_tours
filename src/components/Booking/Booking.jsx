import "./booking.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

const Booking = ({ tour, avgRating }) => {
  const navigate = useNavigate();
  const { price, reviews } = tour;
  const [credentials, setCredentials] = useState({
    userId: '01',
    userEmail: "example@gmail.com",
    fullname: "",
    phone: "",
    guestSize: 1,
    bookAt: "",
  });
  
  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const serviceFee = 10;
  const totalFee = Number(price) * Number(credentials.guestSize) + Number(serviceFee);
  const handleClick = (e) => {
    e.preventDefault();
    navigate('/thank-you');
  };
  return (
    <div className="booking">
      <div className="booking__top d-flex align-items-center justify-content-between">
        <h3>
          ${price} <span>/ per person</span>
        </h3>
        <span className="tour__rating d-flex align-items-center">
          <i className="ri-star-s-fill"></i>
          {avgRating === 0 ? null : avgRating} ({reviews?.length})
        </span>
      </div>
      {/* ==== booking form ==== */}
      <div className="booking__form">
        <h5>Information</h5>
        <Form className="booking__info__form" >
          <FormGroup>
            <input
              type="text"
              id="fullname"
              placeholder="Full Name"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <input
              type="number"
              id="phone"
              placeholder="Phone"
              required
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup className="d-flex align-items-center gap-3">
            <input
              type="date"
              id="bookAt"
              placeholder=""
              required
              onChange={handleChange}
            />
            <input
              type="number"
              id="guestSize"
              placeholder="Guest"
              required
              onChange={handleChange}
            />
          </FormGroup>
        </Form>
      </div>
      {/* ==== booking form ==== */}
      {/* ==== booking form bottom */}
      <div className="booking__bottom">
        <ListGroup>
          <ListGroupItem className="border-0 px-0">
            <h5 className="d-flex align-items-center gap-1">
              ${price} <i className="ri-close-line"></i> 1 person
            </h5>
            <span>${price}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0">
            <h5>Services Charges</h5>
            <span>${serviceFee}</span>
          </ListGroupItem>
          <ListGroupItem className="border-0 px-0 total">
            <h5>Total</h5>
            <span>${totalFee}</span>
          </ListGroupItem>
        </ListGroup>
        <Button className="btn primary__btn w-100 mt-4"
        onSubmit={handleClick}>Book Now</Button>
      </div>
      {/* ==== booking form bottom */}
    </div>
  );
};

export default Booking;
