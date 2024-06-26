import { UserMapToModelType } from "../../models/types/userTypes";

const normalizeEditUser = (user: UserMapToModelType) => {
  return {
    _id: user._id,
    name: {
      first: user.first,
      middle: user.middle,
      last: user.last,
    },
    phone: user.phone,
    email: user.email,
    password: user.password,
    image: {
      url: user.url,
      alt: user.alt,
    },
    address: {
      state: user.state,
      country: user.country,
      city: user.city,
      street: user.street,
      houseNumber: +user.houseNumber,
      zip: +user.zip,
    },
    isBusiness: user.isBusiness,
  };
};

export default normalizeEditUser;
