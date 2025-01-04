export type ProductsType = {
  uid: number;
  title: string;
  description: string;
  media_single: {
    id: number;
    url: string;
  };
  media_slider: {
    id: number;
    url: string;
  };
  price: number;
};

export type FormState =
  | {
      errors?: {
        username?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
