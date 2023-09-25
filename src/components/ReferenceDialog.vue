<template>
    <q-dialog v-model="modelValue">
        <q-card>
            <q-card-section>
                <!-- Здесь разместите содержимое справочника -->
                <h6>{{ store.catalogName }}</h6>

                <div class="searchInput">
                    <q-input v-model="searchText" label="Поиск позиции по первым символам" outlined />
                    <q-btn icon="search" />
                </div>

                <div class="addInput">
                    <q-input v-model="newEntry" label="Добавить новую запись" outlined />
                    <q-btn icon="add" @click="addEntryFromButton(newEntry)" />
                </div>

                <q-list>
                    <q-item v-for="entry in filteredItems" :key="entry.id" clickable>
                        <!-- Выводите записи и иконку "Удалить" -->
                        {{ entry.name }}
                        <q-item-section side>
                            <q-btn flat icon="delete" @click="removeEntry(entry.id)" />
                        </q-item-section>
                        <q-item-section side>
                            <q-btn flat icon="keyboard_arrow_right" @click="selectEntryAndAddToPrescription(entry.id)" />
                        </q-item-section>
                    </q-item>
                </q-list>
            </q-card-section>
            <q-card-actions align="left">
                <!-- Используйте @click, чтобы закрыть диалоговое окно -->
                <q-btn label="Закрыть" color="primary" @click="closeDialog" />
            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
  
<script>

import { defineComponent, ref, watch, computed } from 'vue';

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
        const newEntry = ref( "" );
        const searchText = ref( "" )

        const filteredItems = computed( () => {
            if ( !searchText.value ) {
                return items.value;
            }

            const searchTerm = searchText.value.toLowerCase();
            return items.value.filter( ( entry ) =>
                entry.name.toLowerCase().startsWith( searchTerm )
            );
        } );

        const addEntryFromButton = ( newEntryValue ) => {
            // Создаем новую запись (ваш код для генерации id и имени)
            const newEntryData = {
                id: Date.now().toString(), // Ваш способ генерации уникального id
                name: newEntryValue, // Используем значение из newEntryValue
            };

            // Вызываем функцию добавления записи с новыми данными
            props.store.addEntry( newEntryData );

            // Очищаем поле ввода
            newEntry.value = '';
            // Устанавливаем новое значение
        };

        const removeEntry = ( id ) => {
            props.store.removeEntryById( id );
        };

        watch( () => props.store.array, ( newArray ) => {
            items.value = newArray;
        } );

        const selectEntry = ( id ) => {
            props.store.selectEntry( id );
        };

        console.log( selectEntry );

        const addToPrescription = () => {
            props.store.addToPrescription();
        };

        const selectEntryAndAddToPrescription = ( id ) => {
            selectEntry( id );
            addToPrescription();
            console.log( 'проверка' );
        };



        return {
            closeDialog,
            items,
            addEntryFromButton,
            removeEntry,
            newEntry,
            searchText,
            filteredItems,
            selectEntry,
            addToPrescription,
            selectEntryAndAddToPrescription
        };
    },
} );
</script>

<style scoped>
.addInput,
.searchInput {
    display: flex;
    /* Здесь исправлена ошибка. */
}
</style>