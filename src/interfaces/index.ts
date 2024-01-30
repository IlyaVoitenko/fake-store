export interface Product {
  category: string;
  description: string;
  id: number | string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
}
export interface ProductsSliceInit {
  listProducts: Product[];
  product: Product;
  isLoading: boolean;
}
