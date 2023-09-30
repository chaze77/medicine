import { IDrugsStore } from "./drugs-items";

export const methodRouteItems: IDrugsStore[] = [
  {
    storeName: "methodRoute",
    catalogName: "Путь приема",
    data: [
      {
        id: "1",
        name: "Перорально",
        category: "methodRoute",
        bigCategory: "methodRoute",
      },
      {
        id: "2",
        name: "Подкожно",
        category: "methodRoute",
        bigCategory: "methodRoute",
      },
      {
        id: "3",
        name: "Аретериально",
        category: "methodRoute",
        bigCategory: "methodRoute",
      },
    ],
  },
  {
    storeName: "drugDoses",
    catalogName: "Путь приема",
    data: [
      {
        id: "1",
        name: "мкг",
        category: "drugDoses",
        bigCategory: "drugDoses",
      },
      {
        id: "2",
        name: "мл",
        category: "drugDoses",
        bigCategory: "drugDoses",
      },
      {
        id: "3",
        name: "мг/кг",
        category: "drugDoses",
        bigCategory: "drugDoses",
      },
    ],
  },
];
