import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

//react icons
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const SwiperComponent = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  useEffect(() => {
    const swiperInstance = document.querySelector(".swiper").swiper;
    if (swiperInstance) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, []);

  return (
    <div className="align-elements relative w-full">
      {/* Custom Left Button */}
      <button
        ref={prevRef}
        className="absolute left-10 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#333638] hover:bg-hoverIcon"
      >
        <MdOutlineArrowBackIos className="text-white" />
      </button>

      {/* Custom Right Button */}
      <button
        ref={nextRef}
        className="absolute right-10 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#333638] hover:bg-hoverIcon"
      >
        <MdOutlineArrowForwardIos className="text-white" />
      </button>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        className="rounded-lg shadow-lg"
      >
        <SwiperSlide>
          <img
            src="/images/png/hero.png"
            alt="Slide 1"
            className="h-60 w-full rounded-lg object-cover sm:h-72 md:h-80 lg:h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/png/hero.png"
            alt="Slide 1"
            className="h-60 w-full rounded-lg object-cover sm:h-72 md:h-80 lg:h-96"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/images/png/hero.png"
            alt="Slide 1"
            className="h-60 w-full rounded-lg object-cover sm:h-72 md:h-80 lg:h-96"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
