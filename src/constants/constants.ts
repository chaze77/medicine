// Определение интерфейса для массива программ
interface IProgram {
  id: string;
  name: string;
  category?: string | undefined;
  value?: number | undefined;
}

interface IHandbookItemInjection {
  id: string;
  catalogName: string;
}
// Создание константы programs с массивом программ
export const programs: IProgram[] = [
  { id: "1", name: "HD", category: "programs" },
  { id: "2", name: "HDF", category: "programs" },
  { id: "3", name: "UF", category: "programs" },
];

export const injections: IProgram[] = [
  { id: "1", name: "Игла", category: "injections" },
  { id: "2", name: "Катетер", category: "injections" },
];

interface IHandbookItem {
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
      { id: "1", name: "Диализатор 1", category: "dialyzers" },
      { id: "2", name: "Диализатор 2", category: "dialyzers" },
      { id: "3", name: "Диализатор 3", category: "dialyzers" },
      // Другие данные для диализаторов
    ],
  },
  {
    storeName: "hubs",
    catalogName: "Концентраторы",
    withInput: true,
    data: [
      { id: "1", name: "Концентратор 1", category: "hubs" },
      { id: "2", name: "Концентратор 2", category: "hubs" },
    ],
  },
  {
    storeName: "catheters",
    catalogName: "Катетеры",
    withInput: false,
    data: [
      { id: "1", name: "Катетер размер 1", category: "catheters" },
      { id: "2", name: "Катетер размер 2", category: "catheters" },
      { id: "3", name: "Катетер размер 3", category: "catheters" },
      { id: "4", name: "Катетер размер 4", category: "catheters" },
    ],
  },
  {
    storeName: "cathetersType",
    catalogName: "Типы Катетеров",
    withInput: false,
    data: [
      { id: "1", name: "Катетер  Фолея", category: "cathetersType" },
      { id: "2", name: "Катетер  Малеко", category: "cathetersType" },
      { id: "3", name: "Катетер  Пацерра", category: "cathetersType" },
      { id: "4", name: "Катетер  Тиманна", category: "cathetersType" },
      { id: "5", name: "Катетер  Мелатоне", category: "cathetersType" },
    ],
  },
  {
    storeName: "needles",
    catalogName: "Иглы",
    withInput: false,
    data: [
      { id: "1", name: "Игла  размер 1", category: "needles" },
      { id: "2", name: "Игла  размер 2", category: "needles" },
      { id: "3", name: "Игла  размер 3", category: "needles" },
      { id: "4", name: "Игла  размер 4", category: "needles" },
    ],
  },
  {
    storeName: "needlesType",
    catalogName: "Типы игл",
    withInput: false,
    data: [
      { id: "1", name: "Венозные", category: "needlesType" },
      { id: "2", name: "Артериальные", category: "needlesType" },
    ],
  },

  // Добавьте данные для других справочников аналогичным образом
];

export const deskBook: IHandbookItem[] = [
  {
    storeName: "units",
    catalogName: "Бикорбонат",
    data: [
      {
        id: "1",
        name: "грамм",
        category: "unit",
      },
      {
        id: "2",
        name: "литр",
        category: "unit",
      },
    ],
  },

  {
    storeName: "antikogulant",
    catalogName: "Антикоагуляция",
    data: [
      {
        id: "1",
        name: "антикогуляция 1",
        category: "antikogulant",
      },
      {
        id: "2",
        name: "антикогуляция 2",
        category: "antikogulant",
      },
    ],
  },
];

export const icons: IProgram[] = [
  { id: "1", name: "computer", category: "program" },
  { id: "2", name: "bloodtype", category: "dialyzers" },
  { id: "3", name: "sanitizer", category: "hubs" },
  { id: "4", name: "vaccines", category: "injection" },
  { id: "6", name: "science", category: "catheters" },
  { id: "7", name: "science", category: "bikorbonat" },
  { id: "8", name: "terminal", category: "weight" },
  { id: "9", name: "journal", category: "antikogulant" },
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
