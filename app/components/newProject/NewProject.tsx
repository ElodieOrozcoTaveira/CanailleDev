import "../newProject/NewProject.scss";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";

import React from "react";

//style swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function NewProject() {
  const projets = [
    {
      id: 1,
      titre: "Les Chips de Nos Montagnes",
      image: "/Projets/lcdnm.webp",
      url: "https://www.leschipsdenosmontagnes.com/",
      privacy: "Projet Public",
      width: 200,
      height: 120,
    },
    {
      id: 2,
      titre: "Braap! - en cours..",
      image: "/Projets/braap.png",
      url: "/404",
      privacy: "Projet Privé",
      width: 150,
      height: 100,
    },
    {
      id: 3,
      titre: "BlaBlaBook, Apothéose fin de formation",
      image: "/Projets/blablabook.webp",
      url: "/BBB",
      privacy: "Projet Privé",
      width: 200,
      height: 120,
    },
    {
      id: 4,
      titre: "OCoffee, projet de formation",
      image: "/Projets/ocoffee.webp",
      url: "/Ocoffee",
      privacy: "Projet Privé",
      width: 200,
      height: 120,
    },
  ];
  return (
    <>
      <h2 className="projets-h2">Mes Projets (privés/publics)</h2>
      <h3 className="projets-h3">Mes Projets (privés/publics)</h3>

      <div className="swipper-wrapper-custom">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 5,
            },
            1440:{
              slidesPerView:2,
              spaceBetween:5,
            },
          }}
          className="projets-swiper"
        >
          {projets.map((projet) => (
            <SwiperSlide key={projet.id}>
              <div
                key={projet.id}
                className="projets-container__id"
                data-id={projet.id}
              >
                <Link
                  href={projet.url}
                  target={projet.id === 1 ? "_blank" : undefined}
                  rel={projet.id === 1 ? "noopener noreferrer" : undefined}
                  className="projets-container__link"
                >
                  <Image
                    className="projets-container__img"
                    src={projet.image}
                    alt={projet.titre}
                    width={projet.width}
                    height={projet.height}
                    />
                  </Link>
                  <p className="projets-container__titre">{projet.titre}</p>
                  <p className="projets-container__privacy">{projet.privacy}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
