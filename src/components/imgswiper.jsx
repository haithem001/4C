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

import "./imgswiper.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import React, { useEffect, useState } from "react";


const Imgswiper = () => {
    const imgs = [a, b, d,e,f,g,h,i,k,l,m,n,o,p,q,r,s,t,u]; // Image paths
    const [idx, setIdx] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIdx((prevIdx) => (prevIdx + 1) % imgs.length); // Loop back to 0
        }, 2000);

        return () => clearInterval(interval); // Cleanup interval
    }, [imgs.length]);

    return (
        <div
            className="carousel-container"
            style={{
                display: "flex",
                marginTop:"150px",
                marginBottom:"10px",
                alignItems: "center",
                justifyContent: "center",
                alignContent: "center",
                height: "40vh",
                backgroundColor: "#0077b6",
            }}>
            <div
                className="carousel"
                style={{
                    width: "900px",
                    height: "600px",
                    alignItems: "center",
                    boxShadow: "1px 1px 20px rgba(47, 47, 47)",
                }}
            >
                <div
                    className="imgs-container"
                    style={{
                        display: "flex",
                        transition: "transform 0.5s ease-in-out",
                        transform: `translateX(${-idx * 100}%)`,
                    }}
                >
                    {imgs.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                minWidth: "900px",
                                height: "600px",
                                backgroundImage: `url(${img})`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                            }}
                        ></div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Imgswiper;
