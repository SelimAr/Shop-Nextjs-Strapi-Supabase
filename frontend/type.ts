export type ProductsType = {
  uid: number;
  title: string;
  description: string;
  media_single: {
    id: number;
    url: string;
  };
  media_slider: any;
  price: number;
};
