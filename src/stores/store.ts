import { defineStore } from "pinia";
import { ref } from "vue";
import { createArrayStore } from "./arrayStore";
import {
  dialyzers,
  catheters,
  hubs,
  cathetersType,
  needles,
  needlesType,
} from "../constants/constants";

export const useRootStore = defineStore("root", () => {
  const selectedProgram = ref(null); // Одна переменная для выбранной программы
  const selectedInjection = ref(null); // Одна переменная для выбранной инъекции

  const selectProgram = (programName) => {
    selectedProgram.value = programName;
  };

  const selectInjection = (injectionName) => {
    selectedInjection.value = injectionName;
  };

  const dialyzersStore = createArrayStore(dialyzers, "Диализаторы"); // Хранилище для Dializators
  const hubsStore = createArrayStore(hubs, "Концентраторы");
  const cathetersStore = createArrayStore(catheters, "Катетеры");
  const cathetersTypeStore = createArrayStore(cathetersType, "Типы катетеров");
  const needlesStore = createArrayStore(needles, "Иглы");
  const needlesTypeStore = createArrayStore(needlesType, "Типы иглы");
  return {
    selectedProgram,
    selectedInjection,
    selectProgram,
    selectInjection,
    dialyzersStore,
    cathetersStore,
    cathetersTypeStore,
    needlesStore,
    needlesTypeStore,
    hubsStore,
  };
});
