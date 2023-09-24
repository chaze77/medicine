import { ref, Ref } from "vue";

// Определение типа для записи
interface Entry {
  id: string;
  name: string;
  // Другие поля записи, если они есть
}

// Определение типа для магазина
interface ArrayStore {
  array: Ref<Entry[]>;
  catalogName: string;
  addEntry: (newEntry: Entry) => void;
  removeEntryById: (id: string) => void;
  // Другие функции магазина, если они есть
}

export const createArrayStore = (
  initialArray: Entry[],
  catalogName: string
): ArrayStore => {
  const array = ref(initialArray);

  const addEntry = (newEntry: Entry) => {
    // Генерируем уникальный ID для новой записи (например, с использованием текущей даты и времени)
    newEntry.id = Date.now().toString();

    // Добавляем новую запись в массив
    array.value.push(newEntry);
  };

  const removeEntryById = (id: string) => {
    array.value = array.value.filter((entry) => entry.id !== id);
  };

  return {
    array,
    addEntry,
    removeEntryById,
    catalogName,
  };
};
