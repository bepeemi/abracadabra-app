import gramadoImg from '../assets/img/gramado-img.jpg';
import rjImg from '../assets/img/rj-img.jpg';
import jericoacoaraImg from '../assets/img/jericoacoara.jpg';
import ouroPretoImg from '../assets/img/ouro-preto-mg.jpg';
import montanhaImg from '../assets/img/montanha.jpg';
import greciaImg from '../assets/img/grecia.jpg';
import pracadaSeImg from '../assets/img/pracadase.jpg';
import riodeJaneiroImg from '../assets/img/riodeJaneiro.jpg';
import spImg from '../assets/img/sp.jpg';


export const mockListings = [
  {
    id: 1,
    name: "Pousadinha em Saquarema",
    location: "Rio de Janeiro",
    price: 199,
    rating: 4.8,
    reviewsCount: 55,
    images: [rjImg],
    amenities: ["Wi-Fi", "Ar-condicionado"],
    description: "Quarto confortável no centro do Rio.",
    reviews: []
  },
  {
    id: 2,
    name: "Chalézinho Aconchegante",
    location: "Gramado",
    price: 280,
    rating: 5,
    reviewsCount: 8,
    images: [gramadoImg],
    amenities: ["Wi-Fi", "Lareira"],
    description: "Suíte de alto padrão em Gramado.",
    reviews: []
  },
  {
    id: 3,
    name: "Praia de Jericoacoara",
    location: "Ceará",
    price: 450,
    rating: 5,
    reviewsCount: 42,
    images: [jericoacoaraImg],
    amenities: ["Wi-Fi", "Garagem", "café da manhã"],
    description: "Pousada beira mar.",
    reviews: []
  },
  {
    id: 4,
    name: "Centro Histórico de Ouro Preto",
    location: "Minas Gerais",
    price: 199,
    rating: 4,
    reviewsCount: 42,
    images: [ouroPretoImg],
    amenities: ["Wi-Fi", "Garagem", "café da manhã"],
    description: "Casa aconchegante no Centro Histórico",
    reviews: []
  },
  {
    id: 5,
    name: "Farol Santander",
    location: "São Paulo",
    price: 350,
    rating: 5,
    reviewsCount: 85,
    images: [spImg],
    amenities: ["Wi-Fi", "Garagem", "Jantar","café da manhã" ],
    description: "Quarto de luxo no Centro Histórico de São Paulo",
    reviews: []
  }
];

export const featuredLocations = [
  
  {
    id: 1,
    name: "Rio de Janeiro",
    image: riodeJaneiroImg
  },
  {
    id: 2,
    name: "Praça da Sé",
    image: pracadaSeImg
  },
  {
    id: 3,
    name: "Grecia",
    image: greciaImg
  },
   {
    id: 4,
    name: "Montanha",
    image: montanhaImg
  }

];
