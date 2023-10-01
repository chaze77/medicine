<template>
  <q-page class="q-pa-md d-flex flex-center justify-center">
    <div class="container">
      <q-card-section class="title_container">
        <p class="title">Сеанс гемодиализа</p>
        <p class="lable">Номер месяца</p>
      </q-card-section>
      <q-card-section>
        <p class="title">Назначение сеанса гемодиализа</p>
      </q-card-section>

      <q-card-section>
        <ProgramList />
      </q-card-section>
      <q-card-section>
        <DialyzersAndHubsList :show-reference-dialog="showReferenceDialog" :get-category-name="getCategoryName" />
      </q-card-section>
      <q-card-section>
        <injectionList :show-reference-dialog="showReferenceDialog" :get-category-name="getCategoryName" />
      </q-card-section>
      <q-card-section>
        <BicarbonateValuesList :open-unit-dialog="openUnitDialog" />
      </q-card-section>

      <q-card-section>
        <q-btn class="save-btn" @click="saveData">Сформировать сеанс</q-btn>
      </q-card-section>
      <q-card-section>
        <Reciept />
      </q-card-section>


      <q-card-section class="title_container">
        <p class="title">Назначение после сеанса</p>
      </q-card-section>

      <q-card-section>
        <Medication :show-reference-dialog="showReferenceDialog" />
      </q-card-section>
      <!-- :get-category-name="getCategoryNameDoses" -->
      <q-card-section>
        <Doses :open-unit-dialog="openUnitDialog" />
      </q-card-section>

      <q-card-section>
        <NumberOfSeans />
        <Dates />
      </q-card-section>
      <q-card-section>
        <q-btn class="save-btn" @click="saveAfterData">Сформировать</q-btn>
      </q-card-section>
      <q-card-section>
        <Table />
      </q-card-section>
    </div>


  </q-page>
</template>

<script>
import { useRootStore } from "../stores/store";

import { prescription, afterArray } from "../stores/arrayStore/";
import Reciept from "../components/Reciept.vue";
import ProgramList from "../components/ProgramList.vue"
import injectionList from "../components/InjectionList.vue"
import DialyzersAndHubsList from "../components/DialyzersAndHubsList.vue"
import BicarbonateValuesList from "../components/BicarbonateValuesList.vue"
import Medication from "../components/after/Medications.vue"
import Doses from "../components/after/Doses.vue"
import NumberOfSeans from "../components/after/NumberOfSeans.vue"
import Dates from "../components/after/Dates.vue"
import Table from "../components/after/Table.vue"

export default {
  name: "IndexPage",
  components: {
    ProgramList,
    injectionList,
    DialyzersAndHubsList,
    Reciept,
    BicarbonateValuesList,
    Medication,
    Doses,
    NumberOfSeans,
    Dates,
    Table
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
      // console.log( 'проверка', storeName );
      const selectedEntry = prescription.value.find( ( item ) => item.category === storeName );
      return selectedEntry ? selectedEntry.name : null;
    }

    // function getCategoryNameDoses( storeName ) {
    //   // console.log( 'проверка', storeName );
    //   const selectedEntry = afterArray.value.find( ( item ) => item.category === storeName );
    //   return selectedEntry ? selectedEntry.name : null;
    // }

    const saveData = () => {
      console.log( prescription.value.length );
      if ( prescription.value.length < 7 ) {
        store.addInputValueToPrescription()
        store.addSessionDataToPrescription()
        console.log( 'done' );
      }
    }


    const saveAfterData = () => {
      store.addSessionDataToAfterArray()


    }

    console.log( afterArray.value );

    return {
      showReferenceDialog,
      prescription,
      afterArray,
      getCategoryName,
      // getCategoryNameDoses,
      openUnitDialog,
      saveData,
      saveAfterData
    };
  },
};
</script>

<style lang="scss" scoped>
@import "../css/app.scss";


.title_container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 20%;
}

.save-btn {
  border: 1px solid grey
}
</style>
