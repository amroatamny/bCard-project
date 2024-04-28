import React from "react";
import PageHeader from "../../components/PageHeader";
import Cards from "../components/Cards";
import CardInterface from "../interface/CardInterface";

const CardsPage = () => {
  const cards: CardInterface[] = [
    {
      _id: "028374643 ",
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
        street: "rothcheld",
        houseNumber: 21,
        zip: 30100,
      },
      bizNumber: 1_000_000,
      user_id: "513421ecd123jk",
      likes: [],
      createdAt: new Date(),
    },
    {
      _id: "213727969 ",
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
        street: "rothcheld",
        houseNumber: 21,
        zip: 30100,
      },
      bizNumber: 1_000_000,
      user_id: "513421ecd123jk",
      likes: [],
      createdAt: new Date(),
    },
    {
      _id: "000000000 ",
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
  return (
    <>
      <PageHeader
        title="Cards page"
        subtitle="here you can find all type of business cads"
      />
      <Cards cards={cards} />
    </>
  );
};

export default CardsPage;
