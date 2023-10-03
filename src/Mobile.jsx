import { useEffect, useRef, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import mobile from "./mobile.module.css";
//import "./all.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.css";
import Perfil from "./MobilePerfil.jsx";

/*
cargador de buscador de tiktok
<svg class="tiktok-d58skf-StyledLoadingCircle e14ntknm5" width="16" data-e2e="" height="16" viewBox="0 0 48 48" fill="rgba(255, 255, 255, .34)" xmlns="http://www.w3.org/2000/svg" style="margin: 0px 12px;"><path fill-rule="evenodd" clip-rule="evenodd" d="M24 12.5C17.6487 12.5 12.5 17.6487 12.5 24C12.5 30.3513 17.6487 35.5 24 35.5C26.8172 35.5 29.3919 34.4902 31.3919 32.8101C32.4491 31.9219 34.026 32.059 34.9142 33.1161C35.8023 34.1733 35.6653 35.7503 34.6081 36.6384C31.741 39.0471 28.0369 40.5 24 40.5C14.8873 40.5 7.5 33.1127 7.5 24C7.5 14.8873 14.8873 7.5 24 7.5C33.1127 7.5 40.5 14.8873 40.5 24C40.5 25.3807 39.3807 26.5 38 26.5C36.6193 26.5 35.5 25.3807 35.5 24C35.5 17.6487 30.3513 12.5 24 12.5Z"></path></svg>*/

function Posts({ showComentariosProp }) {
  /*se necesita una funcion que detecte si tiene mas de 100 del length y si lo tiene poner "mas"
  y si no lo tiene dejarlo asi*/
  const [publicacion, setPublicacion] = useState([]);
  const [alturaBody, setAlturaBody] = useState();

  //aqui esta en false porque no se ha pulsado
  const [corazonPulsado, setCorazonPulsado] = useState(false);

  useEffect(() => {
    //http://localhost:8000/imagenes
    fetch("http://localhost:8000/imagenes", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        valor: "hola",
      }),
    })
      .then((e) => e.json())
      .then((e) => {
        console.log(e);
        setPublicacion(e.posts);
      });

    const alturaBody = document.body.clientHeight;
    setAlturaBody(alturaBody);

    //swiper detectar cambio
  }, []);

  //hacer una funcion que cada 5 sliders bajados vaya cargando 5 mas
  let num = 0;
  const ho = (url) => {
    num++;
    //preguntar a chat gpt como detectar si el slider es bajado
    //hacia abajo aumentar num++ pero si es subido hacia arriba disminuir num--
    console.log("Hola");
    const history = window.history;
    //aqui en "sliderwazaa" poner el url del post siguiente para que si el usuario recarga la pagina o
    //o llega a compartir el link se rediriga hacia la publicacion
    history.pushState(null, "perfilaaaaaa", "sliderwazaa");
  };

  const corazonPulsadoFuncion = () => {
    setCorazonPulsado(!corazonPulsado);
    //aqui tambien va el fetch para enviar al servidor que tal imagen fue corazoneado
  };

  return (
    <Swiper
      className={mobile.posts_content}
      direction="vertical"
      freeMode={true}
      overflow="hidden"
      height={alturaBody}
      grabCursor={true}
      onSlideChange={() => ho(num)}
      id="data"
      style={{ overflowY: "hidden", maxHeight: "100vh" }}
    >
      {publicacion.map((pub, ind) => {
        return (
          <SwiperSlide key={ind} className={mobile.publicacion}>
            <div className={mobile.post} id="post">
              <div className={mobile.image}>
                <img src={pub.image_publicado} id="image" alt="" />
              </div>
              <div className={mobile.left}>
                <div className={mobile.left_name}>{pub.nombre_cuenta}</div>
                <div className={mobile.left_texto}>
                  <span className={mobile.text} id="text">
                    {pub.texto_contenido}
                  </span>
                  <span className={mobile.linea}>
                    {
                      /*aqui quise ponerle una linea para ponerle en el
            position:bottom 0      un opacity:.4 para que se vea medio transparente*/
                    }
                  </span>
                </div>
              </div>
              <div className={mobile.right}>
                <div className={mobile.right_content}>
                  <div className={mobile.perfil}>
                    <div className={mobile.perfil_image}>
                      <img src="./captura4.PNG"></img>
                    </div>
                  </div>
                  <div className={mobile.heard}>
                    <div
                      className={mobile.heard_image}
                      onClick={corazonPulsadoFuncion}
                    >
                      <svg
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                      >
                        <g
                          filter="url(#Icon_Color-Like_Shadow_Alt_1_svg__b)"
                          clipPath="url(#Icon_Color-Like_Shadow_Alt_1_svg__a)"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15 4.5c6 0 9 4 9 4s3-4 9-4c7 0 12 5.5 12 12.5 0 8-6.54 15.13-12.5 20.5C28.82 40.81 26 43 24 43s-4.9-2.2-8.5-5.5C9.64 32.13 3 25 3 17 3 10 8 4.5 15 4.5Z"
                            fill={corazonPulsado ? "#e1415f" : "white"}
                            fillOpacity=".9"
                            style={{ transition: "fill 500ms" }}
                            shapeRendering="crispEdges"
                          >
                          </path>
                        </g>
                        <defs>
                          <clipPath id="Icon_Color-Like_Shadow_Alt_1_svg__a">
                            <path fill="#fff" d="M0 0h48v48H0z"></path>
                          </clipPath>
                          <filter
                            id="Icon_Color-Like_Shadow_Alt_1_svg__b"
                            x="-1.5"
                            y="1.5"
                            width="51"
                            height="47.5"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            >
                            </feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            >
                            </feColorMatrix>
                            <feOffset dy="1.5"></feOffset>
                            <feGaussianBlur stdDeviation="2.25">
                            </feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out">
                            </feComposite>
                            <feColorMatrix
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            >
                            </feColorMatrix>
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_81245_5661"
                            >
                            </feBlend>
                            <feColorMatrix
                              in="SourceAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            >
                            </feColorMatrix>
                            <feOffset dy="1.5"></feOffset>
                            <feGaussianBlur stdDeviation="0.75">
                            </feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out">
                            </feComposite>
                            <feColorMatrix
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            >
                            </feColorMatrix>
                            <feBlend
                              in2="effect1_dropShadow_81245_5661"
                              result="effect2_dropShadow_81245_5661"
                            >
                            </feBlend>
                            <feBlend
                              in="SourceGraphic"
                              in2="effect2_dropShadow_81245_5661"
                              result="shape"
                            >
                            </feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <span>160</span>
                  </div>
                  <div className={mobile.comments}>
                    <div
                      className={mobile.comments_image}
                      onClick={() => showComentariosProp(true)}
                    >
                      <svg
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                      >
                        <g filter="url(#Icon_Color-Comment_Shadow_svg__a)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M38.5 35.31c4.1-4.11 6.5-8.4 6.5-13.38C45 11.8 35.73 3.6 24.3 3.6S3.6 11.8 3.6 21.93C3.6 32.05 13.17 39 24.6 39v3.36c0 1.06 1.1 1.74 2.04 1.24 2.92-1.59 8.33-4.76 11.85-8.29ZM14.23 19.46a2.95 2.95 0 0 1 2.96 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Zm13.02 2.93a2.95 2.95 0 0 0-2.96-2.93 2.95 2.95 0 0 0-2.96 2.93 2.95 2.95 0 0 0 2.96 2.94 2.95 2.95 0 0 0 2.96-2.94Zm7.1-2.93a2.95 2.95 0 0 1 2.95 2.93 2.95 2.95 0 0 1-2.96 2.94 2.95 2.95 0 0 1-2.95-2.94 2.95 2.95 0 0 1 2.95-2.93Z"
                            fill="#fff"
                            fill-opacity="0.9"
                          >
                          </path>
                        </g>
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M24.6 39s11.47-.89 16.26-7.02c-4.8 6.75-9.59 10.43-13.78 11.66C22.88 44.87 24.6 39 24.6 39Z"
                          fill="#000"
                          fillOpacity="0.03"
                        >
                        </path>
                        <defs>
                          <filter
                            id="Icon_Color-Comment_Shadow_svg__a"
                            x="1.2"
                            y="2.4"
                            width="46.2"
                            height="44.97"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            >
                            </feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            >
                            </feColorMatrix>
                            <feOffset dy="1.2"></feOffset>
                            <feGaussianBlur stdDeviation="1.2"></feGaussianBlur>
                            <feColorMatrix
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            >
                            </feColorMatrix>
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_1_2867"
                            >
                            </feBlend>
                            <feBlend
                              in="SourceGraphic"
                              in2="effect1_dropShadow_1_2867"
                              result="shape"
                            >
                            </feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                    <span>100</span>
                  </div>
                  <div className={mobile.other}>
                    <div className={mobile.other_image}>
                      <svg
                        viewBox="0 0 48 48"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="30px"
                      >
                        <g
                          filter="url(#Icon_Color-Share_Shadow_Alt_2_svg__b)"
                          clipPath="url(#Icon_Color-Share_Shadow_Alt_2_svg__a)"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M25.56 4.07a1.98 1.98 0 0 0-2.15-.42 1.95 1.95 0 0 0-1.21 1.8v8.34c-5.4.35-10.04 2.2-13.43 5.68C4.97 23.35 3 29.03 3 36.19c0 .79.48 1.5 1.22 1.8.73.3 1.58.13 2.14-.42 3.34-3.31 7.65-4.56 11.25-4.95 1.8-.2 3.37-.18 4.5-.1h.09v9.03c0 .78.46 1.48 1.18 1.79.72.3 1.56.16 2.13-.37l18.87-17.49a1.94 1.94 0 0 0 .04-2.8L25.56 4.07Z"
                            fill="#fff"
                            fillOpacity="0.9"
                            shapeRendering="crispEdges"
                          >
                          </path>
                        </g>
                        <defs>
                          <clipPath id="Icon_Color-Share_Shadow_Alt_2_svg__a">
                            <path fill="#fff" d="M0 0h48v48H0z"></path>
                          </clipPath>
                          <filter
                            id="Icon_Color-Share_Shadow_Alt_2_svg__b"
                            x="-1.5"
                            y="0.5"
                            width="51"
                            height="49"
                            filterUnits="userSpaceOnUse"
                          >
                            <feFlood
                              flood-opacity="0"
                              result="BackgroundImageFix"
                            >
                            </feFlood>
                            <feColorMatrix
                              in="SourceAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            >
                            </feColorMatrix>
                            <feOffset dy="1.5"></feOffset>
                            <feGaussianBlur stdDeviation="2.25">
                            </feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out">
                            </feComposite>
                            <feColorMatrix
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
                            >
                            </feColorMatrix>
                            <feBlend
                              in2="BackgroundImageFix"
                              result="effect1_dropShadow_81245_5665"
                            >
                            </feBlend>
                            <feColorMatrix
                              in="SourceAlpha"
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                              result="hardAlpha"
                            >
                            </feColorMatrix>
                            <feOffset dy="1.5"></feOffset>
                            <feGaussianBlur stdDeviation="0.75">
                            </feGaussianBlur>
                            <feComposite in2="hardAlpha" operator="out">
                            </feComposite>
                            <feColorMatrix
                              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                            >
                            </feColorMatrix>
                            <feBlend
                              in2="effect1_dropShadow_81245_5665"
                              result="effect2_dropShadow_81245_5665"
                            >
                            </feBlend>
                            <feBlend
                              in="SourceGraphic"
                              in2="effect2_dropShadow_81245_5665"
                              result="shape"
                            >
                            </feBlend>
                          </filter>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={mobile.image_cover}>
              <img src={pub.image_publicado}></img>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

function HomeFooter() {
  return (
    <div className={`${mobile.footer}`}>
      <div className={mobile.ul}>
        <Link to="/">
          <div className={mobile.li_home}>
            <div className={mobile.image}>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M23.0484 7.84003C23.6014 7.38666 24.3975 7.38666 24.9504 7.84001L41.051 21.04C41.5411 21.4418 41.7258 22.1082 41.5125 22.705C41.2991 23.3017 40.7338 23.7 40.1 23.7H37.769L36.5769 36.7278C36.4592 38.0149 35.3798 39 34.0873 39H13.9127C12.6202 39 11.5409 38.0149 11.4231 36.7278L10.231 23.7H7.89943C7.2657 23.7 6.70035 23.3017 6.487 22.705C6.27364 22.1083 6.45833 21.4418 6.9484 21.04L23.0484 7.84003ZM23.9995 10.9397L12.0948 20.7H12.969L14.369 36H22.4994V28.3138C22.4994 27.7616 22.9471 27.3138 23.4994 27.3138H24.4994C25.0517 27.3138 25.4994 27.7616 25.4994 28.3138V36H33.631L35.031 20.7H35.9045L23.9995 10.9397Z"
                >
                </path>
              </svg>
            </div>
            <span>inicio</span>
          </div>
        </Link>
        <Link to="/descubrir">
          <div className={mobile.li_descubrir}>
            <div className={mobile.image}>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M18 12.5C15.5897 12.5 13.5849 14.5018 13.5849 17.0345C13.5849 19.5672 15.5897 21.569 18 21.569C20.4103 21.569 22.4151 19.5672 22.4151 17.0345C22.4151 14.5018 20.4103 12.5 18 12.5ZM10.5849 17.0345C10.5849 12.9017 13.8766 9.5 18 9.5C22.1234 9.5 25.4151 12.9017 25.4151 17.0345C25.4151 21.1673 22.1234 24.569 18 24.569C13.8766 24.569 10.5849 21.1673 10.5849 17.0345ZM18 29.8793C14.0801 29.8793 10.7403 32.5616 9.69697 36.2673C9.5473 36.7989 9.03833 37.1708 8.49337 37.0811L7.50662 36.9189C6.96166 36.8292 6.58837 36.3131 6.72325 35.7776C8.00732 30.6788 12.5509 26.8793 18 26.8793C23.449 26.8793 27.9927 30.6788 29.2767 35.7776C29.4116 36.3131 29.0383 36.8292 28.4934 36.9189L27.5066 37.0811C26.9617 37.1708 26.4527 36.7989 26.303 36.2673C25.2597 32.5616 21.9199 29.8793 18 29.8793Z"
                >
                </path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M33 31.5371C32.2445 31.5371 31.5198 31.668 30.8447 31.9093C30.3246 32.0951 29.7189 31.9243 29.4549 31.4392L28.9769 30.5608C28.713 30.0757 28.8907 29.463 29.4009 29.2516C30.513 28.791 31.7285 28.5371 33 28.5371C37.4554 28.5371 41.1594 31.6303 42.2706 35.7812C42.4135 36.3147 42.0386 36.8308 41.4935 36.9196L40.5065 37.0804C39.9614 37.1692 39.4546 36.7956 39.2894 36.2686C38.4217 33.5 35.91 31.5371 33 31.5371Z"
                >
                </path>
                <path
                  d="M33 18.5C31.6193 18.5 30.5 19.6193 30.5 21C30.5 22.3807 31.6193 23.5 33 23.5C34.3807 23.5 35.5 22.3807 35.5 21C35.5 19.6193 34.3807 18.5 33 18.5ZM27.5 21C27.5 17.9624 29.9624 15.5 33 15.5C36.0376 15.5 38.5 17.9624 38.5 21C38.5 24.0376 36.0376 26.5 33 26.5C29.9624 26.5 27.5 24.0376 27.5 21Z"
                >
                </path>
              </svg>
            </div>
            <span>descubrir</span>
          </div>
        </Link>
        <Link to="/upload">
          <div className={mobile.li_upload}>
            <div>
              sd
              {
                /*<svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 75 49"
                width="100%"
                height="100%"
              >
                <path
                  fill="#D8D8D8"
                  stroke="#979797"
                  stroke-width="0.5"
                  d="M.25.25h74.5v48.5H.25z"
                  opacity="0.01"
                >
                </path>

                <rect
                  width="36"
                  height="28"
                  x="19.5"
                  y="10.5"
                  fill="#161823"
                  rx="8"
                >
                </rect>
                <path
                  fill="lightblue"
                  fill-rule="evenodd"
                  d="M37 18a.5.5 0 00-.5.5v5h-5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h5v5a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-5h5a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-5v-5a.5.5 0 00-.5-.5h-1z"
                  clip-rule="evenodd"
                >
                </path>
              </svg>*/
              }
            </div>
          </div>
        </Link>
        <Link to="/bandeja">
          <div>
            <div>
              <svg
                height="40px"
                width="40px"
                viewBox="0 0 32 32"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0362 21.3333H18.5243L15.9983 24.4208L13.4721 21.3333H7.96047L7.99557 8H24.0009L24.0362 21.3333ZM24.3705 23.3333H19.4721L17.2883 26.0026C16.6215 26.8176 15.3753 26.8176 14.7084 26.0026L12.5243 23.3333H7.62626C6.70407 23.3333 5.95717 22.5845 5.9596 21.6623L5.99646 7.66228C5.99887 6.74352 6.74435 6 7.66312 6H24.3333C25.2521 6 25.9975 6.7435 26 7.66224L26.0371 21.6622C26.0396 22.5844 25.2927 23.3333 24.3705 23.3333ZM12.6647 14C12.2965 14 11.998 14.2985 11.998 14.6667V15.3333C11.998 15.7015 12.2965 16 12.6647 16H19.3313C19.6995 16 19.998 15.7015 19.998 15.3333V14.6667C19.998 14.2985 19.6995 14 19.3313 14H12.6647Z"
                >
                </path>
              </svg>
            </div>
            <span>
              bandeja
            </span>
          </div>
        </Link>
        <Link to="/perfil">
          <div>
            <div>
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 48 48"
                fill="#fff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.0001 11.5C20.9625 11.5 18.5001 13.9624 18.5001 17C18.5001 20.0376 20.9625 22.5 24.0001 22.5C27.0377 22.5 29.5001 20.0376 29.5001 17C29.5001 13.9624 27.0377 11.5 24.0001 11.5ZM15.5001 17C15.5001 12.3056 19.3057 8.5 24.0001 8.5C28.6945 8.5 32.5001 12.3056 32.5001 17C32.5001 21.6944 28.6945 25.5 24.0001 25.5C19.3057 25.5 15.5001 21.6944 15.5001 17ZM24.0001 30.5C19.1458 30.5 15.0586 33.7954 13.8578 38.2712C13.7147 38.8046 13.2038 39.1741 12.6591 39.0827L11.6729 38.9173C11.1282 38.8259 10.7571 38.3085 10.8888 37.7722C12.3362 31.8748 17.6559 27.5 24.0001 27.5C30.3443 27.5 35.664 31.8748 37.1114 37.7722C37.2431 38.3085 36.872 38.8259 36.3273 38.9173L35.3411 39.0827C34.7964 39.1741 34.2855 38.8046 34.1424 38.2712C32.9416 33.7954 28.8544 30.5 24.0001 30.5Z"
                >
                </path>
              </svg>
            </div>
            <span>perfil</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

function Comentarios({claseProp, botonSalir}){
  return(
    <div className={`${mobile.comentario} ${claseProp}`}>
      <div>
        <span>150 comentarios</span>
        <span onClick={botonSalir}>boton</span>
      </div>
    </div>
  )
}

function Home() {
  //este solo es un nombre de clase wazaa no sirve de nada si no pongo nada solo aparece undefined
  const [clase, setClase] = useState("wazaaaa");
  const inputSearch = useRef();

  //aqui se envia el fetch cuando se da click a la lupa
  const lupaFuncion = () => {
    inputSearch.current.value = "hola";
  };

  const showComentariosFuncion = () => {
    //aqui hay 2 clases de mobile.entrada y mobile.salida de comentarios animacion
    setClase(mobile.entrada);
  };
  return (
    <div className={mobile.ventana}>
      <div className={mobile.header}>
        <div className={mobile.input}>
          <input type="text" ref={inputSearch}></input>
          <div className={mobile.lupa} onClick={lupaFuncion}>
            <svg
              fill="currentColor"
              fontSize="24px"
              viewBox="0 0 48 48"
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
            >
              <path
                d="M21.26 7a15.26 15.26 0 1 0 0 30.52 15.26 15.26 0 0 0 0-30.52ZM2 22.26A19.26 19.26 0 1 1 36.23 34.4l9.65 9.66c.3.29.3.76 0 1.06l-1.76 1.76c-.3.3-.77.3-1.06 0l-9.66-9.65A19.26 19.26 0 0 1 2 22.27Z"
              >
              </path>
            </svg>
          </div>
        </div>
      </div>
      <div className={mobile.centro}>
        <div className={mobile.container}>
          {/*<Posts showComentariosProp={()=>setClase(mobile.entrada)}></Posts>
                 <Posts showComentariosProp={showComentariosFuncion}></Posts>
                 hay 2 maneras de realizar esto
          */}
          <Posts showComentariosProp={showComentariosFuncion}></Posts>
        </div>
      </div>
      <HomeFooter></HomeFooter>
      {/*showComentarios?<h1 className={mobile.com}>hola<button onClick={()=>setShowComentarios(false)}>salir</button></h1>:<h1>chao</h1>*/}

      {
        /*esto es la seccion de comentarios*/
       /* <div className={`${mobile.comentario} ${clase}`}>
          <div className={mobile.primero}>
            <button onClick={() => setClase(mobile.salida)}>salir</button>
          </div>
         
          
        </div>*/
      }
       {/*claseProp es una clase = mobile.entrada (uso css modules)
         botonSalir es una funcion recibida del hijo cuando se da click en boton cambia la clase
       */}
      <Comentarios claseProp={clase} botonSalir={()=>setClase(mobile.salida)}></Comentarios>
    </div>
  );
}

function Usuario() {
  //aqui creo que es cuando se da click al perfil circulo derecho
  const { nombreUsuario } = useParams();
  fetch(`http://localhost:8000/user/@${nombreUsuario}`);
  return (
    <div>
      hola
    </div>
  );
}

function Mobil() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home></Home>}>
        </Route>
        <Route
          path="/perfil/*"
          element={(
            <Perfil footer={<HomeFooter></HomeFooter>}>
            </Perfil>
          )}
        >
        </Route>
        <Route path="/user/:nombreUsuario" element={<Usuario></Usuario>}>
        </Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Mobil;
