import gramadoImg from '../assets/img/gramado-img.jpg';
import rjImg from '../assets/img/rj-img.jpg';

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
  }
];
