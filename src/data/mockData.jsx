import gramadoImg from '../assets/img/gramado-img.jpg';
import rjImg from '../assets/img/rj-img.jpg';
import jericoacoaraImg from '../assets/img/jericoacoara.jpg';
import ouroPretoImg from '../assets/img/ouro-preto-mg.jpg';
import montanhaImg from '../assets/img/montanha.jpg';


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
  }
];

export const featuredLocations = [
  {
    id: 1,
    name: "Rio de Janeiro",
    image: rjImg
  },
  {
    id: 2,
    name: "Gramado",
    image: gramadoImg
  },
  {
    id: 3,
    name: "Jericoacoara",
    image: jericoacoaraImg
  },
   {
    id: 4,
    name: "Montanha",
    image: montanhaImg
  }

];
