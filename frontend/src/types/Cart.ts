export type CartItem = {
  image: string | undefined;
  slug: string;
  quantity: number;
  countInStock: number;
  price: number;
  _id: string;
  name: string;
};

export type ShippingAddress = {
  fullName: string;
  address: string;
  city: string;
};

export type Cart = {
  itemsPrice: number;
  shippingPrice: number;
  discount: number;
  totalPrice: number;
  cartItems: CartItem[];
  shippingAddress: ShippingAddress;
  paymentMethod: string;
};
