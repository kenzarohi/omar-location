export type CarCategory = "Citadine" | "Berline" | "SUV" | "Luxe";

export interface Car {
  id: string;
  name: string;
  category: CarCategory;
  pricePerDay: number;
  fuel: string;
  transmission: string;
  seats: number;
  image: string;
  imageAlt: string;
}

export const categories: Array<CarCategory | "Tous"> = [
  "Tous",
  "Citadine",
  "Berline",
  "SUV",
  "Luxe",
];

/** Flotte Omar — données vitrine */
export const cars: Car[] = [
  {
    id: "clio",
    name: "Renault Clio",
    category: "Citadine",
    pricePerDay: 39,
    fuel: "Essence",
    transmission: "Manuelle",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Renault Clio blanche vue de trois-quarts",
  },
  {
    id: "208",
    name: "Peugeot 208",
    category: "Citadine",
    pricePerDay: 42,
    fuel: "Essence",
    transmission: "Automatique",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Peugeot 208 moderne en ville",
  },
  {
    id: "octavia",
    name: "Skoda Octavia",
    category: "Berline",
    pricePerDay: 59,
    fuel: "Diesel",
    transmission: "Automatique",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Berline élégante sur route",
  },
  {
    id: "serie3",
    name: "BMW Série 3",
    category: "Berline",
    pricePerDay: 89,
    fuel: "Essence",
    transmission: "Automatique",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "BMW Série 3 noire vue de profil",
  },
  {
    id: "tucson",
    name: "Hyundai Tucson",
    category: "SUV",
    pricePerDay: 75,
    fuel: "Hybride",
    transmission: "Automatique",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "SUV familial sur fond urbain",
  },
  {
    id: "q5",
    name: "Audi Q5",
    category: "SUV",
    pricePerDay: 110,
    fuel: "Diesel",
    transmission: "Automatique",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1609521263047-f8f205293f24?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "SUV premium Audi",
  },
  {
    id: "classe-s",
    name: "Mercedes Classe S",
    category: "Luxe",
    pricePerDay: 220,
    fuel: "Essence",
    transmission: "Automatique",
    seats: 5,
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Mercedes Classe S limousine noire",
  },
  {
    id: "porsche",
    name: "Porsche 911",
    category: "Luxe",
    pricePerDay: 350,
    fuel: "Essence",
    transmission: "Automatique",
    seats: 2,
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    imageAlt: "Porsche 911 grise vue de face",
  },
];

export const stats = [
  { id: "clients", label: "Clients satisfaits", value: 2400, suffix: "+" },
  { id: "vehicules", label: "Véhicules disponibles", value: 85, suffix: "+" },
  { id: "annees", label: "Années d'expérience", value: 12, suffix: "" },
];

export const advantages = [
  {
    id: "flex",
    title: "Réservation flexible",
    description:
      "Modifiez ou annulez jusqu'à 24 h avant le départ, sans frais cachés.",
  },
  {
    id: "assurance",
    title: "Assurance tout risque",
    description:
      "Couverture complète incluse sur toute la flotte pour rouler serein.",
  },
  {
    id: "entretien",
    title: "Véhicules entretenus",
    description:
      "Contrôle technique et entretien régulier avant chaque location.",
  },
  {
    id: "support",
    title: "Assistance 24/7",
    description:
      "Une équipe disponible à toute heure pour vous accompagner sur la route.",
  },
];

export const steps = [
  {
    id: "1",
    title: "Choisissez",
    description: "Parcourez la flotte et sélectionnez le véhicule adapté à votre trajet.",
  },
  {
    id: "2",
    title: "Réservez",
    description: "Indiquez vos dates et coordonnées : confirmation instantanée.",
  },
  {
    id: "3",
    title: "Roulez",
    description: "Récupérez les clés en agence ou en livraison, et prenez la route.",
  },
];

export const testimonials = [
  {
    id: "t1",
    name: "Sophie M.",
    role: "Cliente fidèle",
    quote:
      "Service impeccable. La Classe S était impeccable et la remise des clés ultra simple.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Karim B.",
    role: "Voyageur",
    quote:
      "Omar propose un excellent rapport qualité-prix. SUV parfait pour un week-end en famille.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Léa D.",
    role: "Professionnelle",
    quote:
      "Réservation fluide, véhicule propre et équipe très réactive. Je recommande.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Thomas R.",
    role: "Amateur auto",
    quote:
      "La 911 était un rêve. Expérience premium du début à la fin.",
    rating: 5,
  },
];

export const agency = {
  name: "Omar",
  tagline: "Location de véhicules premium",
  phone: "+33 1 84 88 00 00",
  email: "contact@omar-location.fr",
  address: "42 Avenue des Champs-Élysées, 75008 Paris",
  hours: [
    { days: "Lun – Ven", time: "8h00 – 20h00" },
    { days: "Samedi", time: "9h00 – 18h00" },
    { days: "Dimanche", time: "10h00 – 16h00" },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
  },
};
