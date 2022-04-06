import { v4 as uuidv4 } from "uuid";

export const products = {
  hamburgers: [
    {
      name: "X-frango",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "frango", "tomate"],
      imgUrl: '/images/po-hamburger.png'
    },
    {
      name: "X-bacon",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate"],
      imgUrl: '/images/po-hamburger-2.jpg'
    },
    {
      name: "X-tudo",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl: '/images/po-hamburger-3.jpg'
    },
    {
      name: "X-tudão",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl: '/images/po-hamburger-4.jpg'
    },
    {
      name: "X-egg",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl: '/images/po-hamburger-5.jpg'
    },
    {
      name: "X-vegetariano",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl:'/images/po-hamburger-3.jpg'
    },
    {
      name: "hamburguer",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl: '/images/po-hamburger.png'
    },
  ],

  hotdogs: [
    {
      name: "Duas salsichas",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "frango", "tomate"],
      imgUrl: '/images/cachorro1.jpg'
    },
    {
      name: "Frango",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate"],
      imgUrl: '/images/cachorro2.jpg'
    },
    {
      name: "grande",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl: '/images/cachorro3.jpg'
    },
    {
      name: "maior ainda",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl: '/images/cachorro4.jpg'
    },
    {
      name: "bem maior",
      id: uuidv4(),
      ingredients: ["batata", "cebola", "queijo", "bacon", "tomate", "frango"],
      imgUrl: '/images/cachorro2.jpg'
    },
  ],
};
