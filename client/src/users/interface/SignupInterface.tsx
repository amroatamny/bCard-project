import AddressInterface from "../../cards/interface/AddressInterface";
import { imageInterface } from "./ImageInterface";
import { nameInterFace } from "./NameInterface";

interface signupInterface {
  name: nameInterFace;
  phone: string;
  email: string;
  password: string;
  image: imageInterface;
  address: AddressInterface;
  isBusiness: Boolean;
}
export default signupInterface;
