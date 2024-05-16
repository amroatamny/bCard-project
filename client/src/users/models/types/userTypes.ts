export type TokenType = { _id: string; isBusiness: boolean; isAdmin: boolean };

export type LoginType = { email: string; password: string };

export type RegistrationForm = {
  first: string;
  middle: string;
  last: string;
  phone: string;
  email: string;
  password: string;
  url: string;
  alt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: string;
  zip: string;
  isBusiness: boolean;
};
export type RegistrationFormErrors = Partial<RegistrationForm>;
