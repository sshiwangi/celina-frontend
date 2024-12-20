export interface FeaturedPackage {
  id: string;
  name: string;
  image: string;
  bestFor: string[];
  rating: number;
  numberOfPhoneNumbers: number;
  pricePerNumber: number;
}

export const featuredPhonePackages: FeaturedPackage[] = [
  {
    id: "fp-001",
    name: "Tech Leads Pro",
    image: "/images/tech-lead.jpg",
    bestFor: ["Technology", "Engineering"],
    rating: 4.9,
    numberOfPhoneNumbers: 50,
    pricePerNumber: 29.99,
  },
  
  {
    id: "fp-003",
    name: "Sales Elite",
    image: "/images/tech-lead.jpg",
    bestFor: ["Sales", "Marketing"],
    rating: 4.8,
    numberOfPhoneNumbers: 75,
    pricePerNumber: 34.99,
  },
  {
    id: "fp-004",
    name: "Startup Bundle",
    image: "/images/tech-lead.jpg",
    bestFor: ["Startups", "Technology"],
    rating: 4.7,
    numberOfPhoneNumbers: 25,
    pricePerNumber: 39.99,
  },
  {
    id: "fp-005",
    name: "Enterprise Plus",
    image: "/images/tech-lead.jpg",
    bestFor: ["Enterprise", "Corporate"],
    rating: 4.7,
    numberOfPhoneNumbers: 200,
    pricePerNumber: 19.99,
  },
  {
    id: "fp-006",
    name: "Real Estate Pro",
    image: "/images/tech-lead.jpg",
    bestFor: ["Real Estate", "Sales"],
    rating: 4.6,
    numberOfPhoneNumbers: 50,
    pricePerNumber: 29.99,
  },
  {
    id: "fp-007",
    name: "Education Elite",
    image: "/images/tech-lead.jpg",
    bestFor: ["Education", "Training"],
    rating: 4.6,
    numberOfPhoneNumbers: 100,
    pricePerNumber: 24.99,
  },
  {
    id: "fp-008",
    name: "Financial Services",
    image: "/images/tech-lead.jpg",
    bestFor: ["Finance", "Banking"],
    rating: 4.5,
    numberOfPhoneNumbers: 150,
    pricePerNumber: 27.99,
  },
  {
    id: "fp-009",
    name: "Retail Connect",
    image: "/images/tech-lead.jpg",
    bestFor: ["Retail", "Commerce"],
    rating: 4.5,
    numberOfPhoneNumbers: 75,
    pricePerNumber: 32.99,
  },
  {
    id: "fp-010",
    name: "Legal Pro",
    image: "/images/tech-lead.jpg",
    bestFor: ["Legal", "Professional"],
    rating: 4.5,
    numberOfPhoneNumbers: 50,
    pricePerNumber: 44.99,
  },
];
