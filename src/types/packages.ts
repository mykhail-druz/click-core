export interface Package {
  name: string;
  description: string;
  price: number | "custom";
  features: string[];
}