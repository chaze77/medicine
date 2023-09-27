<template>
    <q-dialog v-model="modelValue">
        <q-card>

            <q-item class="text-subtitle2">Справочник {{ naming }}</q-item>
            <div v-for="entry in items">
                <q-item :key="entry.id" clickable @click="handleUnitSelection(entry.name, entry.category)">
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


        return {
            closeDialog,
            handleUnitSelection,
            items,
            naming
        };
    },
} );
</script>

<style scoped></style>