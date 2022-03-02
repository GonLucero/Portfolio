import videogames from "./image/videogames.png"
import cryptoweb from "./image/cryptoweb.png"
// import logiexpress from "./image/logiexpress.png"
import fleet from "../pic/fleet.png"
import logiexpress from "../pic/logiexpress.png"

const Portfolio_data = [
  {
    id: 1,
    category: "React Native / TypeScript",
    totalLike: "600",
    title: "FLEET es Aplicación Móvil para la gestión de una flota de transportistas, donde es posible: Asignar viajes por medio de Google Maps, pagarles a través de MercadoPago y poder chatear en vivo con ellos.",
    image: fleet,
    button:"false",
    git:"https://github.com/LOGIEXPRESS/Fleet",
    url:"hola"
  },
  {
    id: 2,
    category: "React Native / TypeScript",
    totalLike: "750",
    title: "LOGIEXPRESS es una plataforma que conecta a transportistas y clientes, para gestionar la logística de cargas. El mapa es provisto por Google Maps, el pago es por medio de Stripe y es posible chatear en vivo entre ellos.",
    image: logiexpress,
    button:"false",
    git:"https://github.com/LOGIEXPRESS/LOGIEXPRESS",
    url:"hola"
  },
  {
    id: 3,
    category: "React / Redux",
    totalLike: "630",
    title: "Crypto-Web es un Dashboard, que permite ver y analizar los valores de diferentes criptomonedas en tiempo real. La información es provista por Binance.",
    image: cryptoweb,
    button:"true",
    web:"https://crypto-web1.vercel.app/",
    git:"https://github.com/GonLucero/Crypto-Web",
    url:"hola"
  },
  {
    id: 4,
    category: "React / PostGreSQL",
    totalLike: "360",
    title: "Videogames-App es un sitio web que ofrece la cobertura de los principales videojuegos actuales, y también permite cargar nuevos videojuegos.",
    image: videogames,
    button:"true",
    web:"https://workshop-heroku-1.vercel.app/home",
    git:"https://github.com/GonLucero/Videogames-APP",
    url:"hola"
  },
  // {
  //   id: 5,
  //   category: "WEB DESIGN",
  //   totalLike: "280",
  //   title: "Design for tecnology & services",
  //   image: {videogames},
  // },
  // {
  //   id: 6,
  //   category: "WEB DESIGN",
  //   totalLike: "690",
  //   title: "App for tecnology & services",
  //   image: "./image/portfolio-06.jpg",
  // },
]
export default Portfolio_data
