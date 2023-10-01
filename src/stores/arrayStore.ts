import { ref, Ref } from "vue";

// Определение типа для записи
interface Entry {
  id: string;
  name: string;
  category?: string;
  // Другие поля записи, если они есть
}

// Определение типа для магазина
interface ArrayStore {
  array: Ref<Entry[]>;
  catalogName: string;
  storeName: string;
  withInput?: boolean;

  addEntry: (newEntry: Entry) => void;
  removeEntryById: (id: string) => void;
}

export const prescription = ref<Entry[]>([]);
export const afterArray = ref<Entry[]>([]);

export const createArrayStore = (
  initialArray: Entry[],
  catalogName: string,
  storeName: string,
  withInput?: boolean
): ArrayStore => {
  const array = ref(initialArray);
  // Добавляем переменную для хранения inputValue

  const addEntry = (newEntry: Entry) => {
    newEntry.id = Date.now().toString();
    array.value.push(newEntry);
  };

  const removeEntryById = (id: string) => {
    array.value = array.value.filter((entry) => entry.id !== id);
  };

  const addToPrescription = (selectedEntryId: string) => {
    const selectedEntry = array.value.find(
      (entry) => entry.id === selectedEntryId
    );
    if (selectedEntry) {
      const category = selectedEntry.category;

      prescription.value = prescription.value.filter(
        (item) => item.category !== category
      );
      prescription.value.push(selectedEntry);
    }
  };

  // const addToAfterArray = (selectedEntryId) => {
  //   const selectedEntry = array.value.find(
  //     (entry) => entry.id === selectedEntryId
  //   );

  //   // console.log("Добавляю в afterArray:", selectedEntry);

  //   if (selectedEntry) {
  //     const category = selectedEntry.category;

  //     afterArray.value = afterArray.value.filter(
  //       (item) => item.category !== category
  //     );
  //     afterArray.value.push(selectedEntry);

  //   }
  // };

  console.log("Новый afterArray:", afterArray.value);

  return {
    array,
    addEntry,
    removeEntryById,
    catalogName,
    storeName,
    withInput,
    addToPrescription,
    // addToAfterArray,
  };
};
