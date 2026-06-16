export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  description: string;
  longDescription: string;
  price: number;
  rating: number;
  reviewsCount: number;
  image: string;
  specs: { [key: string]: string };
  stock: number;
  featured: boolean;
  datasheetUrl?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Category {
  id: string;
  name: string;
  iconName: string;
  description: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface QuoteRequest {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectDescription: string;
  items: { productName: string; quantity: number; price: number }[];
}
