import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message: "Amazing team! Highly professional and creative.",
    quote: "They delivered excellent work on time. Communication was clear and the results exceeded expectations.",
    name: "John Doe",
    designation: "CEO, Demo Company",
  },
  {
    message: "Great experience working with them.",
    quote: "Their attention to detail and commitment to quality made the project smooth and enjoyable.",
    name: "Jane Smith",
    designation: "Project Manager, Sample Corp",
  },
  {
    message: "Exceptional service and reliability.",
    quote: "The team was responsive, understanding, and went above and beyond. Highly recommended for any project.",
    name: "Alex Brown",
    designation: "CTO, Example Ltd",
  },
];

const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate
                testimonial={{
                  ...testimonial,
                  message: <strong>{testimonial.message}</strong>,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
