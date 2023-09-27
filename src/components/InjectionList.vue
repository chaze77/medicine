<template>
    <div class="injection">
        <q-item class="text-subtitle2">Тип инъекции</q-item>
        <q-btn v-for="inject in injectionList" :key="inject.id" flat @click="chooseInjection(inject.name)"
            :class="{ active: inject.name === selectedInjection }">
            {{ inject.name }}
        </q-btn>
    </div>

    <div class="handbooks">
        <div v-for="(arrayStore, index) in orederHandbooksItemsNext" :key="index">
            <q-item class="text-subtitle2">{{ arrayStore.catalogName }}</q-item>
            <q-btn :label="(getCategoryName(arrayStore.storeName) || 'Спр.' + arrayStore.catalogName)" flat
                :disabled="!selectedInjection || !isItemActive(arrayStore)" />
            <q-btn @click="showReferenceDialog(arrayStore)" color="primary"
                :disabled="!selectedInjection || !isItemActive(arrayStore)">
                <q-icon name="menu_open" />
            </q-btn>
            <reference-dialog v-model="arrayStore.referenceDialogVisible" :store="arrayStore" />
        </div>
    </div>
</template>

<script>
import { useRootStore } from 'src/stores/store';
import { ref } from "vue";
import { injections, handbookItemsInjection } from '../constants/constants';
import ReferenceDialog from "../components/ReferenceDialog.vue"
export default {
    name: 'InjectionList',
    components: {
        ReferenceDialog,
    },
    props: {
        // Проп для управления видимостью диалога
        showReferenceDialog: Function,
        getCategoryName: Function

    },

    setup() {
        const injectionList = ref( injections );
        const selectedInjection = ref( null ); // Одна переменная для выбранной инъекции
        const store = useRootStore();
        const arrayStores = store.arrayStores

        const chooseInjection = ( injectName ) => {
            selectedInjection.value = injectName
            store.selectInjection( injectName );
        };

        const orederHandbooksItemsNext = handbookItemsInjection.map( ( item ) => arrayStores.find( ( storeItem ) => storeItem.catalogName === item.catalogName ) );

        const isItemActive = ( arrayStore ) => {
            if ( !selectedInjection.value ) return true; // Если инъекция не выбрана, все элементы активны
            if ( selectedInjection.value === "Игла" ) {
                // Если выбрана инъекция "Игла", активируем элементы с catalogName "Иглы" и "Типы игл"
                return arrayStore.catalogName === "Иглы" || arrayStore.catalogName === "Типы игл";
            }
            if ( selectedInjection.value === "Катетер" ) {
                // Если выбрана инъекция "Катетер", активируем элементы с catalogName "Катетеры" и "Типы Катетеров"
                return arrayStore.catalogName === "Катетеры" || arrayStore.catalogName === "Типы Катетеров";
            }
            return true; // Если выбрана другая инъекция, все элементы активны
        };
        return {
            injectionList,
            selectedInjection,
            chooseInjection,
            orederHandbooksItemsNext,
            isItemActive,
            arrayStores
        }
    }
}
</script>

<style>
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