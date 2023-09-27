import { defineStore } from "pinia";
import { ref } from "vue";
import { createArrayStore } from "./arrayStore";
import { handbookItems, deskBook } from "../constants/constants";
import { prescription } from "./arrayStore";
import { createDeskBookStore } from "./deskBookStore";

export const useRootStore = defineStore("root", () => {
  const selectedProgram = ref(null); // Одна переменная для выбранной программы
  const selectedInjection = ref(null); // Одна переменная для выбранной инъекции

  const selectProgram = (programName) => {
    selectedProgram.value = programName;
    // Получаем категорию выбранной программы
    const category = "program"; // Замените на реальное значение категории
    // Удаляем все предыдущие выборы из той же категории
    prescription.value = prescription.value.filter(
      (item) => item.category !== category
    );
    // Добавляем выбранное значение в prescription
    prescription.value.push({
      id: Date.now().toString(),
      name: programName,
      category: "program",
    });
  };

  const selectInjection = (injectionName) => {
    selectedInjection.value = injectionName;
    // Получаем категорию выбранной инъекции
    const category = "injection"; // Замените на реальное значение категории
    // Удаляем все предыдущие выборы из той же категории
    prescription.value = prescription.value.filter(
      (item) => item.category !== category
    );
    // Добавляем выбранное значение в prescription
    prescription.value.push({
      id: Date.now().toString(),
      name: injectionName,
      category: "injection",
    });
  };

  const addInputValueToPrescription = () => {
    if (inputValue.value !== null) {
      prescription.value.push({
        category: "hubs",
        id: Date.now().toString(), // Замените на реальную категорию
        name: inputValue.value,
      });
    }
  };

  // Функция для добавления значений из sessionData в prescription
  const addSessionDataToPrescription = () => {
    const sessionDataValue = sessionData.value;
    prescription.value.push(
      {
        category: "bikorbonat", // Замените на реальную категорию
        id: Date.now().toString(),
        name: sessionDataValue.bikorbonat,
      },
      {
        category: "bikorbonat", // Замените на реальную категорию
        id: Date.now().toString(),
        name: sessionDataValue.unit,
      },
      {
        category: "weight", // Замените на реальную категорию
        id: Date.now().toString(),
        name: sessionDataValue.weight,
      },
      {
        category: "antikogulant", // Замените на реальную категорию
        id: Date.now().toString(),
        name: sessionDataValue.antikogulant,
      },
      {
        category: "antikogulant", // Замените на реальную категорию
        id: Date.now().toString(),
        name: sessionDataValue.volume,
      }
    );
  };

  const arrayStores = handbookItems.map((item) => {
    return createArrayStore(
      item.data,
      item.catalogName,
      item.storeName,
      item.withInput
    );
  });

  const deskBookStores = deskBook.map((item) => {
    return createDeskBookStore(item.data, item.catalogName, item.storeName);
  });

  const inputValue = ref<number | null>(null);
  const sessionData = ref({
    bikorbonat: null, // Выбранный бикарбонат
    unit: null, // Выбранная единица измерения
    weight: null, // Сухой вес пациента
    antikogulant: null, // Выбранное антикоагулянтное средство
    volume: null, // Объем
  });

  // function setSessionData(data) {
  //   this.sessionData.value = data;
  // }

  return {
    selectedProgram,
    selectedInjection,
    // concentratorInputValue,
    selectProgram,
    selectInjection,
    arrayStores,
    inputValue,
    addInputValueToPrescription,
    sessionData,
    addSessionDataToPrescription,
    deskBookStores,
  };
});
