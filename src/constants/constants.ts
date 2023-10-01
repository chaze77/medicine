// Определение интерфейса для массива программ
interface IProgram {
  id: string;
  img?: string;
  name: string;
  category?: string | undefined;
  bigCategory?: string | undefined;
  value?: number | undefined;
  group?: string;
}

interface IHandbookItemInjection {
  id: string;
  catalogName: string;
}
// Создание константы programs с массивом программ
export const programs: IProgram[] = [
  {
    id: "1",
    name: "HD",
    category: "programs",
    bigCategory: "programs",
    group: "1",
  },
  {
    id: "2",
    name: "HDF",
    category: "programs",
    bigCategory: "programs",
    group: "1",
  },
  {
    id: "3",
    name: "UF",
    category: "programs",
    bigCategory: "programs",
    group: "1",
  },
];

export const injections: IProgram[] = [
  {
    id: "1",
    name: "Игла",
    category: "injections",
    bigCategory: "injections",
    group: "1",
  },
  {
    id: "2",
    name: "Катетер",
    category: "injections",
    bigCategory: "injections",
    group: "1",
  },
];

export interface IHandbookItem {
  storeName: string;
  catalogName: string;
  withInput?: boolean;
  data: IProgram[]; // Массив данных для хранилища
}

// Создание массива данных для хранилищ
export const handbookItems: IHandbookItem[] = [
  {
    storeName: "dialyzers",
    catalogName: "Диализаторы",
    withInput: false,
    data: [
      {
        id: "1",
        name: "Диализатор1",
        category: "dialyzers",
        bigCategory: "dialyzers",
        group: "1",
      },
      {
        id: "2",
        name: "Диализатор2",
        category: "dialyzers",
        bigCategory: "dialyzers",
        group: "1",
      },
      {
        id: "3",
        name: "Диализатор3",
        category: "dialyzers",
        bigCategory: "dialyzers",
        group: "1",
      },
      // Другие данные для диализаторов
    ],
  },
  {
    storeName: "hubs",
    catalogName: "Концентраторы",
    withInput: true,
    data: [
      {
        id: "1",
        name: "Концентратор1",
        category: "hubs",
        bigCategory: "hubs",
        group: "1",
      },
      {
        id: "2",
        name: "Концентратор2",
        category: "hubs",
        bigCategory: "hubs",
        group: "1",
      },
    ],
  },
  {
    storeName: "catheters",
    catalogName: "Катетеры",
    withInput: false,
    data: [
      {
        id: "1",
        name: "Катетер размер1",
        category: "catheters",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "2",
        name: "Катетер размер2",
        category: "catheters",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "3",
        name: "Катетер размер3",
        category: "catheters",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "4",
        name: "Катетер размер4",
        category: "catheters",
        bigCategory: "injection",
        group: "1",
      },
    ],
  },
  {
    storeName: "cathetersType",
    catalogName: "Типы Катетеров",
    withInput: false,
    data: [
      {
        id: "1",
        name: "Катетер  Фолея",
        category: "cathetersType",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "2",
        name: "Катетер  Малеко",
        category: "cathetersType",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "3",
        name: "Катетер  Пацерра",
        category: "cathetersType",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "4",
        name: "Катетер  Тиманна",
        category: "cathetersType",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "5",
        name: "Катетер  Мелатоне",
        category: "cathetersType",
        bigCategory: "injection",
        group: "1",
      },
    ],
  },
  {
    storeName: "needles",
    catalogName: "Иглы",
    withInput: false,
    data: [
      {
        id: "1",
        name: "Игла  размер1",
        category: "needles",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "2",
        name: "Игла  размер2",
        category: "needles",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "3",
        name: "Игла  размер3",
        category: "needles",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "4",
        name: "Игла  размер4",
        category: "needles",
        bigCategory: "injection",
        group: "1",
      },
    ],
  },
  {
    storeName: "needlesType",
    catalogName: "Типы игл",
    withInput: false,
    data: [
      {
        id: "1",
        name: "Венозные",
        category: "needlesType",
        bigCategory: "injection",
        group: "1",
      },
      {
        id: "2",
        name: "Артериальные",
        category: "needlesType",
        bigCategory: "injection",
        group: "1",
      },
    ],
  },
  {
    storeName: "drugs",
    catalogName: "Лекарственные препараты",
    data: [
      {
        id: "1",
        name: "Лекарственный препарат №1",
        category: "drugs",
        bigCategory: "drugs",
        group: "2",
      },
      {
        id: "2",
        name: "Лекарственный препарат №2",
        category: "drugs",
        bigCategory: "drugs",
        group: "2",
      },
      {
        id: "3",
        name: "Лекарственный препарат №3",
        category: "drugs",
        bigCategory: "drugs",
        group: "2",
      },
    ],
  },
];

// Добавьте данные для других справочников аналогичным образом

export const deskBook: IHandbookItem[] = [
  {
    storeName: "units",
    catalogName: "Бикорбонат",
    data: [
      {
        id: "1",
        name: "грамм",
        category: "unit",
        bigCategory: "unit",
        group: "1",
      },
      {
        id: "2",
        name: "литр",
        category: "unit",
        bigCategory: "unit",
        group: "1",
      },
    ],
  },

  {
    storeName: "antikogulant",
    catalogName: "Антикоагуляция",
    data: [
      {
        id: "1",
        name: "антикогуляция1",
        category: "antikogulant",
        bigCategory: "antikogulant",
        group: "1",
      },
      {
        id: "2",
        name: "антикогуляция2",
        category: "antikogulant",
        bigCategory: "antikogulant",
        group: "1",
      },
    ],
  },
  {
    storeName: "methodRoute",
    catalogName: "Путь приема",
    data: [
      {
        id: "1",
        name: "Перорально",
        category: "methodRoute",
        bigCategory: "methodRoute",
        group: "2",
      },
      {
        id: "2",
        name: "Подкожно",
        category: "methodRoute",
        bigCategory: "methodRoute",
        group: "2",
      },
      {
        id: "3",
        name: "Аретериально",
        category: "methodRoute",
        bigCategory: "methodRoute",
        group: "2",
      },
    ],
  },
  {
    storeName: "drugDoses",
    catalogName: "Дозировка",
    data: [
      {
        id: "1",
        name: "мкг",
        category: "drugDoses",
        bigCategory: "drugDoses",
        group: "2",
      },
      {
        id: "2",
        name: "мл",
        category: "drugDoses",
        bigCategory: "drugDoses",
        group: "2",
      },
      {
        id: "3",
        name: "мг/кг",
        category: "drugDoses",
        bigCategory: "drugDoses",
        group: "2",
      },
    ],
  },
];

export const icons: IProgram[] = [
  {
    id: "1",
    img: "computer",
    name: "Программа",
    category: "program",
    bigCategory: "program",
  },
  {
    id: "2",
    img: "bloodtype",
    name: "Диализатор",
    category: "dialyzers",
    bigCategory: "dialyzers",
  },
  {
    id: "3",
    img: "sanitizer",
    name: "Концентратор обьем",
    category: "hubs",
    bigCategory: "hubs",
  },
  {
    id: "4",
    img: "vaccines",
    name: "Игла/Катетер",
    category: "injection",
    bigCategory: "injection",
  },
  {
    id: "5",
    img: "science",
    name: "Бикорбонат",
    category: "bikorbonat",
    bigCategory: "bikorbonat",
  },
  {
    id: "6",
    img: "science",
    name: "Антикогуляция ед.",
    category: "antikogulant",
    bigCategory: "antikogulant",
  },
  {
    id: "7",
    img: "terminal",
    name: "Сухой вес",
    category: "weight",
    bigCategory: "weight",
  },
];

export const handbookItemsInjection: IHandbookItemInjection[] = [
  { id: "1", catalogName: "Катетеры" },
  { id: "2", catalogName: "Типы Катетеров" },
  { id: "3", catalogName: "Иглы" },
  { id: "4", catalogName: "Типы игл" },
];

export const handbookItemsDialyzersAndHubs: IHandbookItemInjection[] = [
  { id: "1", catalogName: "Диализаторы" },
  { id: "2", catalogName: "Концентраторы" },
];

export const handbookItemsDrugs: IHandbookItemInjection[] = [
  { id: "1", catalogName: "Лекарственные препараты" },
];
