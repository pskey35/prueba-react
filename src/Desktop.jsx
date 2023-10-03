import { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import desktop from "./desktop.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/swiper-bundle.css';

function Home() {
  const [altura, setAltura] = useState();
  const [slides, setSlides] = useState([
    {
      src: "./captura1.PNG",
      alt: "Imagen 1"
    },
    {
      src: "./captura2.PNG",
      alt: "Imagen 2"
    },
    {
      src: "./captura3.PNG",
      alt: "Imagen 3"
    },
    {
      src: "./captura4.PNG",
      alt: "Imagen 4"
    }
  ]);

  

  useEffect(() => {
    const data = document.body.clientHeight;
    setAltura(data);
  }, []);


 // const botonSiguiente = () => {
    //esto de aqui sirve para movernos en sliders slideTo(numeroSlide,milisegundosTransicion)
    /*const swiper = document.querySelector(".swiper").swiper;
    swiper.slideTo(1,3000)*/

    //aqui calculo cuantos divs hay para usar el slideTo
    /*const data = document.querySelector("#data > .swiper-wrapper")
    console.log(data.children)
*/
 // };

  return (
    <div className="home">
      <Swiper
        direction="vertical"
        freeMode={true}
        overflow="hidden"
        height={altura}
        grabCursor={true}
        id="data"
        style={{ overflowY: "hidden", maxHeight: "100vh", background: "red" }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.src} alt={slide.alt} />
          </SwiperSlide>
        ))}
      </Swiper>
      <button onClick={botonSiguiente}>Siguiente</button>
    </div>
  );
}


function Desktop() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/perfil" element={"home"}>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Desktop;
