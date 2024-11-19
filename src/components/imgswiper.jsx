import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import a from "../img/a.jpg";
import b from "../img/b.jpg";
import d from "../img/d.jpg";
import e from "../img/e.jpg";
import f from "../img/f.jpg";
import g from "../img/g.jpg";
import h from "../img/h.jpg";
import i from "../img/i.jpg";
import k from "../img/k.jpg";
import l from "../img/l.jpg";
import m from "../img/m.jpg";
import n from "../img/n.jpg";
import o from "../img/o.jpg";
import p from "../img/p.jpg";
import q from "../img/q.jpg";
import r from "../img/r.jpg";
import s from "../img/s.jpg";
import t from "../img/t.jpg";
import u from "../img/u.jpg";
import v from "../img/v.jpg";
import w from "../img/w.jpg";
import "./imgswiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Imgswiper = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={25}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      className="swiper"
      breakpoints={{
        700: { slidesPerView: 3 },
      }}
    >
      <SwiperSlide >
        <div className="imgswip" style={{ backgroundImage: `url(${a})` }}>
          {" "}
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${b})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${g})` }}></div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${d})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${e})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${f})` }}></div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${h})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${i})` }}></div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${k})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${l})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${m})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${n})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${o})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${p})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${q})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${r})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${s})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${t})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${u})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${v})` }}></div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="imgswip" style={{ backgroundImage: `url(${w})` }}></div>
      </SwiperSlide>
    </Swiper>
  );
};

export default Imgswiper;
