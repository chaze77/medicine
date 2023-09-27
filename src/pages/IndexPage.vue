<template>
  <q-page>
    <div class="q-pa-md d-flex flex-center">
      <div class="title">
        <q-item class="text-subtitle1">Сеанс гемодиализа</q-item>
        <q-item class="text-subtitle2">Назначения сеанса гемодиализа</q-item>
      </div>
      <ProgramList />
      <DialyzersAndHubsList :show-reference-dialog="showReferenceDialog" :get-category-name="getCategoryName" />
      <injectionList :show-reference-dialog="showReferenceDialog" :get-category-name="getCategoryName" />
      <BicarbonateValuesList :open-unit-dialog="openUnitDialog" />

      <div><q-btn @click="saveData">Сформировать сеанс</q-btn></div>

    </div>
    <Reciept />
  </q-page>
</template>

<script>
import { useRootStore } from "../stores/store";
import { prescription } from "../stores/arrayStore/";
import Reciept from "../components/Reciept.vue";
import ProgramList from "../components/ProgramList.vue"
import injectionList from "../components/InjectionList.vue"
import DialyzersAndHubsList from "../components/DialyzersAndHubsList.vue"
import BicarbonateValuesList from "../components/BicarbonateValuesList.vue"

export default {
  name: "IndexPage",
  components: {
    ProgramList,
    injectionList,
    DialyzersAndHubsList,
    Reciept,
    BicarbonateValuesList
  },
  setup() {

    const store = useRootStore();

    const showReferenceDialog = ( arrayStore ) => {
      arrayStore.referenceDialogVisible = true;
    };

    const openUnitDialog = ( descBookStore ) => {
      // Открываем диалоговое окно для выбора единицы измерения
      descBookStore.unitDialogVisible = true;
    }

    function getCategoryName( storeName ) {
      const selectedEntry = prescription.value.find( ( item ) => item.category === storeName );
      return selectedEntry ? selectedEntry.name : null;
    }

    const saveData = () => {
      store.addInputValueToPrescription()
      store.addSessionDataToPrescription()
      console.log( 'done' );
    }


    return {
      showReferenceDialog,
      prescription,
      getCategoryName,
      openUnitDialog,
      saveData
    };
  },
};
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.q-btn {
  width: 160px;
  margin: 20px;
  border: 1px solid grey;
}

.q-btn:hover {
  border: 2px solid #10ad6f;
}

.active {
  border: 2px solid #00804d;
}
</style>
