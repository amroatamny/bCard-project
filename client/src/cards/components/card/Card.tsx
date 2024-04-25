import React from "react";
import MuiCard from "@mui/material/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";
import CardBar from "./CardActionBar";
import CardInterface from "../../interface/CardInterface";

const card: CardInterface = {
  _id: "213727996 ",
  title: "first",
  subtitle: "subtitle",
  description: "test 123",
  phone: "050-0000000",
  email: "amro213@gmail.com",
  image: {
    url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
    alt: "business man",
  },
  address: {
    state: "hola",
    country: "baqa",
    city: "tel-aviv",
    street: "rothcheld",
    houseNumber: 21,
    zip: 30100,
  },
  bizNumber: 1_000_000,
  user_id: "513421ecd123jk",
  likes: [],
  createdAt: new Date(),
};

const Card = () => {
  return (
    <MuiCard sx={{ maxWidth: 345 }}>
      <CardHead image={card.image} />
      <CardBody card={card} />
      <CardBar />
    </MuiCard>
  );
};

export default Card;
