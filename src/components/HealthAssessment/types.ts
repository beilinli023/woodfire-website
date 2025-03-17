
export interface HealthQuestion {
  id: string;
  question: string;
  icon: React.ReactNode;
  options: string[];
}

export interface Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  for: string[];
}
