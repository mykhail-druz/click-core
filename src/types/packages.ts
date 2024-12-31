export interface Package {
  name: string;
  description: string;
  price: "custom" | number;
  features: string[];
}