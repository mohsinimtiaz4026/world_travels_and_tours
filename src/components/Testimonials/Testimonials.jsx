import React from "react";
import Slider from "react-slick";
import avatar01 from "../../assets/images/ava-1.jpg";
import avatar02 from "../../assets/images/ava-2.jpg";
import avatar03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {
  const settings = {
    dots: true,
    infinte: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
    ]
  };
  return (
    <Slider {...settings}>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          tempore quia consectetur recusandae unde laboriosam illum consequuntur
          dolores natus amet distinctio eveniet reprehenderit, nihil perferendis
          fuga. Omnis nesciunt iure sapiente?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar01} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">John Doe</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          tempore quia consectetur recusandae unde laboriosam illum consequuntur
          dolores natus amet distinctio eveniet reprehenderit, nihil perferendis
          fuga. Omnis nesciunt iure sapiente?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar02} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Lia Frankling</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
      <div className="testimonials py-4 px-3">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          tempore quia consectetur recusandae unde laboriosam illum consequuntur
          dolores natus amet distinctio eveniet reprehenderit, nihil perferendis
          fuga. Omnis nesciunt iure sapiente?
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
          <img src={avatar03} alt="" className="w-25 h-25 rounded-2" />
          <div>
            <h6 className="mb-0 mt-3">Benky Smith</h6>
            <p>Customer</p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
