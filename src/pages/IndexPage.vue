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
        <DialyzersAndHubsList :show-reference-dialog="showReferenceDialog" :get-category-name="getCategoryName"
          :targetArray="prescription" />
      </q-card-section>
      <q-card-section>
        <injectionList :show-reference-dialog="showReferenceDialog" :get-category-name="getCategoryName"
          :targetArray="prescription" />
      </q-card-section>
      <q-card-section>
        <BicarbonateValuesList :open-unit-dialog="openUnitDialog" />
      </q-card-section>

      <q-card-section>
        <q-btn class="save-btn" @click="saveData">Сформировать сеанс</q-btn>
      </q-card-section>
      <Reciept />
      <q-card-section class="title_container">
        <p class="title">Назначение после сеанса</p>
      </q-card-section>

      <q-card-section>
        <Medication :show-reference-dialog="showReferenceDialog" :get-category-name="getCategoryName" />
      </q-card-section>
    </div>


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
import Medication from "../components/after/Medications.vue"

export default {
  name: "IndexPage",
  components: {
    ProgramList,
    injectionList,
    DialyzersAndHubsList,
    Reciept,
    BicarbonateValuesList,
    Medication
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

    function getCategoryName( storeName, targerArray ) {
      // console.log( 'проверка', storeName );
      const selectedEntry = prescription.value.find( ( item ) => item.category === storeName );
      return selectedEntry ? selectedEntry.name : null;
    }



    console.log( "prescription", prescription.value );

    const saveData = () => {
      console.log( prescription.value.length );
      if ( prescription.value.length < 7 ) {
        store.addInputValueToPrescription()
        store.addSessionDataToPrescription()
        console.log( 'done' );

      }

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
