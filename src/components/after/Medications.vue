<template>
    <div v-for="(arrayStore, index) in orderedHandbookItemsDrugs" :key="index" class="dialyzers">
        <div class="items_block">
            <div class="dialyzers_items">
                <q-item class="lable">{{ arrayStore.catalogName }}</q-item>
                <span class="items">
                    {{ getCategoryName(arrayStore.storeName) || `Спр. '${arrayStore.catalogName}'` }}</span>
            </div>

            <div class="dialyzers_items">
                <q-btn class="ibtn" @click="showReferenceDialog(arrayStore)">
                    <q-icon name="menu_open" />
                </q-btn>
            </div>
            <reference-dialog v-model="arrayStore.referenceDialogVisible" :store="arrayStore" />
        </div>
    </div>
</template>

<script>
import ReferenceDialog from "../../components/ReferenceDialog.vue"

import { handbookItemsDrugs } from "../../constants/constants"
import { useRootStore } from "../../stores/store"


export default {
    name: 'Medication',
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

        const orderedHandbookItemsDrugs = handbookItemsDrugs.map( ( item ) => arrayStores.find( ( storeItem ) => storeItem.catalogName === item.catalogName ) );



        return {
            orderedHandbookItemsDrugs,
            handbookItemsDrugs

        }
    }
}
</script>
