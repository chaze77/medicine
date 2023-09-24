<template>
  <q-page>
    <div class="q-pa-md d-flex flex-center">
      <div class="title">
        <q-item class="text-subtitle1">Сеанс гемодиализа</q-item>
      </div>
      <div class="program">
        <q-item class="text-subtitle1">Назначения сеанса гемодиализа</q-item>
        <div class="description">
          <q-item class="text-subtitle2">Программа аппарата</q-item>
          <q-btn v-for="program in programsList" :key="program.id" flat @click="chooseProgram(program.name)"
            :class="{ active: store.selectedProgram === program.name }">
            {{ program.name }}
          </q-btn>
        </div>

        <div class="handbook">
          <q-item class="text-subtitle2">{{ store.dialyzersStore.catalogName }}</q-item>
          <q-btn :label="'Спр.' + store.dialyzersStore.catalogName" flat @click="showReferenceDialog('dialyzersStore')" />
          <q-btn @click="showReferenceDialog('dialyzersStore')" color="primary">
            <q-icon name="menu_open" />
          </q-btn>
          <reference-dialog v-model="referenceDialogVisibleForDialyzers" :store="store.dialyzersStore" />
        </div>
        <div class="handbook">
          <q-item class="text-subtitle2">{{ store.hubsStore.catalogName }}</q-item>
          <div style="display: flex;">
            <q-btn :label="'Спр.' + store.hubsStore.catalogName" flat @click="showReferenceDialog('hubsStore')" />
            <q-btn @click="showReferenceDialog('hubsStore')" color="primary">
              <q-icon name="menu_open" />
            </q-btn>
            <q-input label="Объем" filled />

          </div>

          <reference-dialog v-model="referenceDialogVisibleForHubs" :store="store.hubsStore" />
        </div>
        <div class="description">
          <div>
            <q-item class="text-subtitle2">Тип иньекции</q-item>
            <q-btn v-for="inject in injectionList" :key="inject.id" flat @click="chooseInjection(inject.name)"
              :class="{ active: store.selectedInjection === inject.name }">
              {{ inject.name }}
            </q-btn>
          </div>

          <div class="needles" style="display: flex;">
            <div>
              <q-btn :label="'Спр.' + store.needlesStore.catalogName" flat @click="showReferenceDialog('needlesStore')" />
              <q-btn @click="showReferenceDialog('needlesStore')" color="primary">
                <q-icon name="menu_open" />
              </q-btn>
              <reference-dialog v-model="referenceDialogVisibleForNeedles" :store="store.needlesStore" />
            </div>

            <div>
              <q-btn :label="'Спр.' + store.needlesTypeStore.catalogName" flat
                @click="showReferenceDialog('needlesTypeStore')" />
              <q-btn @click="showReferenceDialog('needlesTypeStore')" color="primary">
                <q-icon name="menu_open" />
              </q-btn>
              <reference-dialog v-model="referenceDialogVisibleForNeedlesType" :store="store.needlesTypeStore" />
            </div>
          </div>

          <div class="needles" style="display: flex;">
            <div>
              <q-btn :label="'Спр.' + store.cathetersStore.catalogName" flat
                @click="showReferenceDialog('cathetersStore')" />
              <q-btn @click="showReferenceDialog('cathetersStore')" color="primary">
                <q-icon name="menu_open" />
              </q-btn>
              <reference-dialog v-model="referenceDialogVisibleForCatheters" :store="store.cathetersStore" />
            </div>

            <div>
              <q-btn :label="'Спр.' + store.cathetersTypeStore.catalogName" flat
                @click="showReferenceDialog('cathetersTypeStore')" />
              <q-btn @click="showReferenceDialog('cathetersTypeStore')" color="primary">
                <q-icon name="menu_open" />
              </q-btn>
              <reference-dialog v-model="referenceDialogVisibleForCathetersType" :store="store.cathetersTypeStore" />
            </div>
          </div>


        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useQuasar } from "quasar";
import { useRootStore } from "../stores/store";
import {
  programs, injections
} from "../constants/constants";
import ReferenceDialog from "../components/ReferenceDialog.vue";

export default {
  name: "IndexPage",
  components: {
    ReferenceDialog,
  },
  setup() {
    const programsList = ref( programs );
    const injectionList = ref( injections )
    const store = useRootStore();

    // const referenceDialogVisible = ref( false );

    const chooseProgram = ( programName ) => {
      store.selectProgram( programName );
    };
    const chooseInjection = ( injectName ) => {
      store.selectInjection( injectName );
    };


    const referenceDialogVisibleForDialyzers = ref( false );
    const referenceDialogVisibleForHubs = ref( false );
    const referenceDialogVisibleForNeedles = ref( false );
    const referenceDialogVisibleForNeedlesType = ref( false );
    const referenceDialogVisibleForCatheters = ref( false );
    const referenceDialogVisibleForCathetersType = ref( false );

    const showReferenceDialog = ( storeName ) => {
      switch ( storeName ) {
        case "dialyzersStore":
          referenceDialogVisibleForDialyzers.value = true;
          break;
        case "hubsStore":
          referenceDialogVisibleForHubs.value = true;
          break;
        case "needlesStore":
          referenceDialogVisibleForNeedles.value = true;
          break;
        case "needlesTypeStore":
          referenceDialogVisibleForNeedlesType.value = true;
          break;
        case "cathetersStore":
          referenceDialogVisibleForCatheters.value = true;
          break;
        case "cathetersTypeStore":
          referenceDialogVisibleForCathetersType.value = true;
          break;
        // Добавьте другие кейсы по мере необходимости
        default:
          // Обработка, если storeName не соответствует ни одному из кейсов
          break;
      }
    };



    return {
      programsList,
      injectionList,
      chooseProgram,
      chooseInjection,
      showReferenceDialog,
      store,
      referenceDialogVisibleForDialyzers,
      referenceDialogVisibleForHubs,
      referenceDialogVisibleForNeedles,
      referenceDialogVisibleForNeedlesType,
      referenceDialogVisibleForCatheters,
      referenceDialogVisibleForCathetersType
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
