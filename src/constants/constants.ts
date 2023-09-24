// Определение интерфейса для массива программ
interface IProgram {
  id: string;
  name: string;
}
// Создание константы programs с массивом программ
export const programs: IProgram[] = [
  { id: "1", name: "HD" },
  { id: "2", name: "HDF" },
  { id: "3", name: "UF" },
];

export const injections: IProgram[] = [
  { id: "1", name: "Игла" },
  { id: "2", name: "Катетер" },
];

export const dialyzers: IProgram[] = [
  { id: "1", name: "Диализатор 1" },
  { id: "2", name: "Диализатор 2" },
  { id: "3", name: "Диализатор 3" },
];

export const hubs: IProgram[] = [
  { id: "1", name: "Концентратор 1" },
  { id: "2", name: "Концентратор 2" },
];

export const catheters: IProgram[] = [
  { id: "1", name: "Катетер  размер 1" },
  { id: "2", name: "Катетер  размер 2" },
  { id: "3", name: "Катетер  размер 3" },
  { id: "4", name: "Катетер  размер 4" },
];

export const cathetersType: IProgram[] = [
  { id: "1", name: "Катетер  Фолея" },
  { id: "2", name: "Катетер  Малеко" },
  { id: "3", name: "Катетер  Пацерра" },
  { id: "4", name: "Катетер  Тиманна" },
  { id: "5", name: "Катетер  Мелатоне" },
];

export const needles: IProgram[] = [
  { id: "1", name: "Игла  размер 1" },
  { id: "2", name: "Игла  размер 2" },
  { id: "3", name: "Игла  размер 3" },
  { id: "4", name: "Игла  размер 4" },
];

export const needlesType: IProgram[] = [
  { id: "1", name: "Венозные" },
  { id: "2", name: "Артериальные" },
];

export const handbookItems = [
  {
    storeName: "dialyzers",
    catalogName: "Диализаторы",
    withInput: false,
  },
  {
    storeName: "hubs",
    catalogName: "Хабы",
    withInput: false,
  },
  {
    storeName: "catheters",
    catalogName: "Катетеры",
    withInput: false,
  },
  {
    storeName: "cathetersType",
    catalogName: "Типы катетеров",
    withInput: false,
  },
  {
    storeName: "needles",
    catalogName: "Иглы",
    withInput: false,
  },
  {
    storeName: "needlesType",
    catalogName: "Типы игл",
    withInput: false,
  },
];

export default handbookItems;
