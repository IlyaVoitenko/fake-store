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
export interface FormLoginInit {
  userName: string;
  password: string;
}
export interface FormRegisterInit extends FormLoginInit {
  firstName: string;
  lastName: string;
  email: string;
}

export type validateFunck = string | null;
