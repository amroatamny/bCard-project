import React from "react";
import { Container } from "@mui/material";
import PageHeader from "../../components/PageHeader";
import { useParams } from "react-router-dom";
import CardInterface from "../interface/CardInterface";
import Card from "../components/card/Card";

const CardDetailsPage = () => {
  const { cardId } = useParams();
  const cards: CardInterface[] = [
    {
      _id: "028374643",
      title: "first",
      subtitle: "subtitle",
      description: "test 123",
      phone: "050-1200000",
      email: "amro213@gmail.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
        alt: "business man",
      },
      address: {
        state: "hola",
        country: "baqa",
        city: "tel-aviv",
        street: "baqa",
        houseNumber: 21,
        zip: 30100,
      },
      bizNumber: 1_000_000,
      user_id: "513421ecd123jk",
      likes: [],
      createdAt: new Date(),
    },
    {
      _id: "213727969",
      title: "first",
      subtitle: "subtitle",
      description: "test 123",
      phone: "050-1234567",
      email: "amro213@gmail.com",
      image: {
        url: "https://cdn.pixabay.com/photo/2016/04/20/08/21/entrepreneur-1340649_1280.jpg",
        alt: "business man",
      },
      address: {
        state: "hola",
        country: "baqa",
        city: "tel-aviv",
        street: "jatt",
        houseNumber: 21,
        zip: 30100,
      },
      bizNumber: 1_000_000,
      user_id: "513421ecd123jk",
      likes: [],
      createdAt: new Date(),
    },
    {
      _id: "000000000",
      title: "first",
      subtitle: "subtitle",
      description: "test 123",
      phone: "050-7654321",
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
    },
  ];
  let card = cards.filter((card: CardInterface) => card._id === cardId);
  if (!card.length) return <p>no card found ...</p>;
  return (
    <Container>
      <PageHeader
        title="Business Details"
        subtitle="Here you can see details of the business"
      />
      <div>dd :{cardId}</div>
      <Card card={card[0]} onDelete={console.log} onLike={console.log} />
    </Container>
  );
};

export default CardDetailsPage;
