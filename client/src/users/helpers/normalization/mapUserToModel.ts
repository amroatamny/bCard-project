import signupInterface from "../../interface/SignupInterface";
import { CardMapToModelType } from "../../models/types/userTypes";

const mapUserToModel = (user: signupInterface): CardMapToModelType => {
  return {
    first: user.name.first,
    middle: user.name.middle,
    last: user.name.last,
    phone: user.phone,
    email: user.email,
    password: user.password,
    url: user.image.url,
    alt: user.image.alt,
    state: user.address.state,
    country: user.address.country,
    city: user.address.city,
    street: user.address.street,
    houseNumber: String(user.address.houseNumber!),
    zip: String(user.address.zip!),
  };
};
export default mapUserToModel;
