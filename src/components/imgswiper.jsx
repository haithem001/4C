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
    const imgs = [a, b, d]; // Image paths
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
                justifyContent: "center",
                alignItems: "center",
                height: "50vh",
                backgroundColor: "#6b9c9e",
            }}
        >
            <div
                className="carousel"
                style={{
                    overflow: "hidden",
                    width: "700px", // Increased width
                    height: "500px", // Increased height
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                }}
            >
                <div
                    className="imgs-container"
                    style={{
                        display: "flex",
                        transition: "transform 0.5s ease-in-out",
                        transform: `translateX(${-idx * 700}px)`, // Adjust for new width
                    }}
                >
                    {imgs.map((img, i) => (
                        <div
                            key={i}
                            style={{
                                minWidth: "700px", // Matches carousel width
                                height: "500px", // Matches carousel height
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
