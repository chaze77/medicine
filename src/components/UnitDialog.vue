<template>
    <q-dialog v-model="modelValue">
        <q-card class="container-card">
            <div class="title-container">
                <p class="title-book">Справочник {{ naming }}</p>
            </div>

            <div v-for="entry in items">
                <q-item style="padding-left: 10px;" :key="entry.id" clickable
                    @click=" entry.group === '1' ?
                        handleUnitSelection(entry.name, entry.category) : handleUnitSelectionDoses(entry.name, entry.category)">
                    {{ entry.name }}
                </q-item>
            </div>

        </q-card>
    </q-dialog>
</template>
  
<script>
import { defineComponent, ref } from 'vue';
import { useRootStore } from "../stores/store";

export default defineComponent( {
    props: {
        // Проп для управления видимостью диалога
        modelValue: Boolean,
        store: Object
    },

    setup( props, { emit } ) {
        const closeDialog = () => {
            // Используйте $emit для отправки события обновления
            emit( 'update:modelValue', false );
        };
        const items = ref( props.store.array );
        const naming = ref( props.store.catalogName )
        const store = useRootStore()

        function handleUnitSelection( enryName, category ) {
            store.sessionData[ category ] = enryName;
            closeDialog();
        }

        function handleUnitSelectionDoses( enryName, category ) {
            store.sessionDataDoses[ category ] = enryName;
            closeDialog();
        }

        return {
            closeDialog,
            handleUnitSelection,
            handleUnitSelectionDoses,
            items,
            naming
        };
    },
} );
</script>

<style  lang="scss" scoped>
.title-container {
    background-color: gray;
    padding: 20px;
    margin-bottom: 20px;

    .title-book {
        color: white;
        font-weight: 600;
        font-size: 18px;
    }
}
</style>