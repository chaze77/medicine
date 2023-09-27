<template>
    <div class="handbooks">
        <div v-for="(arrayStore, index) in orderedHandbookItems" :key="index">
            <q-item class="text-subtitle2">{{ arrayStore.catalogName }}</q-item>
            <q-btn :label="(getCategoryName(arrayStore.storeName) || 'Спр.' + arrayStore.catalogName)" flat />
            <q-btn @click="showReferenceDialog(arrayStore)" color="primary">
                <q-icon name="menu_open" />
            </q-btn>
            <q-input v-if="arrayStore.withInput" label="обьем" v-model="inputValue" />
            <reference-dialog v-model="arrayStore.referenceDialogVisible" :store="arrayStore" />
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRootStore } from 'src/stores/store';
import { handbookItemsDialyzersAndHubs } from '../constants/constants';
import ReferenceDialog from "../components/ReferenceDialog.vue"
export default {
    name: 'DialyzersAndHubsList',
    components: {
        ReferenceDialog,
    },
    props: {
        // Проп для управления видимостью диалога
        showReferenceDialog: Function,
        getCategoryName: Function

    },

    setup() {

        const store = useRootStore();
        const arrayStores = store.arrayStores
        const orderedHandbookItems = handbookItemsDialyzersAndHubs.map( ( item ) => arrayStores.find( ( storeItem ) => storeItem.catalogName === item.catalogName ) );
        const inputValue = computed( {
            get: () => store.inputValue,
            set: ( value ) => {
                // Вы можете обновить значение в хранилище при изменении поля bikorbonat
                store.inputValue = value;
            },
        } );

        return {
            orderedHandbookItems,
            arrayStores,
            handbookItemsDialyzersAndHubs,
            inputValue
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