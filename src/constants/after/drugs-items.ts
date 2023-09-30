export interface Idrugs {
  id: string;
  name: string;
  category?: string | undefined;
  bigCategory?: string | undefined;
}

export interface IDrugsStore {
  storeName: string;
  catalogName: string;
  data: Idrugs[];
}
export const handBookDrugsItems: IDrugsStore[] = [
  {
    storeName: "drugs",
    catalogName: "Лекарственные препараты",
    data: [
      {
        id: "1",
        name: "Лекарственный препарат №1",
        category: "drugs",
        bigCategory: "drugs",
      },
      {
        id: "1",
        name: "Лекарственный препарат №2",
        category: "drugs",
        bigCategory: "drugs",
      },
      {
        id: "1",
        name: "Лекарственный препарат №3",
        category: "drugs",
        bigCategory: "drugs",
      },
    ],
  },
];
