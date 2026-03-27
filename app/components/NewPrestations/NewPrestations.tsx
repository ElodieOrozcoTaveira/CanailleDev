import "../NewPrestations/NewPrestations.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { MonitorCog, ServerCog, ShoppingBag, Store } from "lucide-react";

interface PrestaItem {
  id: number;
  sujet: string;
  p: string[];
  image: any; // ou React.ComponentType si tu préfères typer les icônes Lucide
  tarifs: string;
}

export default function NewPrestations() {
  const prestations: PrestaItem[] = [
    {
      id: 1,
      sujet: "Création de sites vitrine",
      p: [
        "Sites modernes et responsives (1 à 5 pages)",
        "Design personnalisé",
        "SEO de base",
        "Mise en ligne",
        "Formulaire de contact",
      ],
      image: Store,
      tarifs: "A partir de 1500 euros",
    },
    {
      id: 2,
      sujet: "Applications Web",
      p: [
        "FrontEnd moderne",
        "BackEnd simple",
        "Animations douces",
        "Formulaires",
        "Optimisation des performances",
        "Sécurité de base",
      ],
      image: ServerCog,
      tarifs: "A partir de 3000 euros",
    },
    {
      id: 3,
      sujet: "Sites e-commerce",
      p: ["Solutions de vente en ligne personnalisées", "Design personnalisé"],
      image: ShoppingBag,
      tarifs: "A partir de 2500 euros",
    },
    {
      id: 4,
      sujet: "Refont/Maintenance",
      p: ["Améliorations de sites existants", "Correction de bugs"],
      image: MonitorCog,
      tarifs: "A partir de 50 euros / heure",
    },
  ];

  return (
    <>
      <section className="container-prestations">
        <h2 className="container-prestations__h2">Prestations</h2>
        <h3 className="container-prestations__underline"></h3>

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
                slidesPerView: 2,
                spaceBetween: 4,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
            }}
            className="prestations-swiper"
          >
            {prestations.map((service) => {
              const IconComponent = service.image;
              return (
                <SwiperSlide key={service.id}>
                  <div
                    className="prestations-container__id"
                    data-id={service.id}
                  >
                    <IconComponent
                      className="prestations-container__icon"
                      size={48}
                    />
                    <h4 className="prestations-container__sujet">
                      {service.sujet}
                    </h4>
                    <ul className="prestations-container__list">
                      {service.p.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}
