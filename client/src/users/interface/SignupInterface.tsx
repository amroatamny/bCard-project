import AddressInterface from "../../cards/interface/AddressInterface";
import { imageInterface } from "./ImageInterface";
import { nameInterFace } from "./NameInterface";

interface signupInterface {
  _id: string;
  name: nameInterFace;
  phone: string;
  email: string;
  password: string;
  image: imageInterface;
  address: AddressInterface;
  isBusiness: boolean;
  isAdmin: boolean;
}
export default signupInterface;
