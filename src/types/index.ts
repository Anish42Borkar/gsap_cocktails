export type NavLinksT = {
  id: string;
  title: string;
};

export type CocktailListsT = {
  name: string;
  country: string;
  detail: string;
  price: string;
};

export interface ProfileListsT {
  imgPath: string;
}

export interface StoreInfoT {
  heading: string;
  address: string;
  contact: ContactT;
}

export interface ContactT {
  phone: string;
  email: string;
}

export interface OpeningHoursT {
  day: string;
  time: string;
}

export interface SocialsT {
  name: string;
  icon: string;
  url: string;
}

export interface SliderListsT {
  id: number;
  name: string;
  image: string;
  title: string;
  description: string;
}
