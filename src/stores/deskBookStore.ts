import { ref, Ref } from "vue";
interface Entry {
  id: string;
  name: string;
  category?: string;
  bigCategory?: string;
  // Другие поля записи, если они есть
}
// Определение типа для записи
interface DeskBookEntry {
  catalogName: string;
  storeName: string;
  data: Entry[];
  //   referenceDialogVisible: boolean;
  // Другие поля записи, если они есть
}

// Определение типа для магазина
interface DeskBookStore {
  array: Ref<DeskBookEntry[]>;

  // Другие поля магазина, если они есть
}

export const createDeskBookStore = (
  initialArray: DeskBookEntry[],
  catalogName: string,
  storeName: string
): DeskBookStore => {
  const array = ref(initialArray);

  return {
    array,
    catalogName,
    storeName,

    // Добавьте другие поля магазина, если необходимо
  };
};
