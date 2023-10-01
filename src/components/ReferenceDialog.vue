<template>
    <q-dialog v-model="modelValue">
        <q-card>
            <q-card-section>
                <h6 class="title">{{ store.catalogName }}</h6>

                <q-btn label="Закрыть" @click="closeDialog" class="close-btn" />


                <div class="inputs">
                    <q-input v-model="searchText" label="Поиск позиции по первым символам" outlined />
                    <q-btn icon="search" />
                </div>

                <div class="inputs">
                    <q-input v-model="newEntry" label="Добавить новую запись" outlined />
                    <q-btn icon="add" @click="addEntryFromButton(newEntry)" />
                </div>

                <q-list>
                    <q-item v-for="entry in filteredItems" :key="entry.id" clickable class="book-items">
                        <p class="title-items">{{ entry.name }}</p>
                        <q-btn flat icon="delete" @click="removeEntry(entry.id)" />
                        <q-btn flat icon="keyboard_arrow_right" @click="handleItemClick(entry)" />

                    </q-item>
                </q-list>
            </q-card-section>
            <q-card-actions align="left">
                <!-- Используйте @click, чтобы закрыть диалоговое окно -->

            </q-card-actions>
        </q-card>
    </q-dialog>
</template>
  
<script>
import { defineComponent, ref, watch, computed } from 'vue';
import { prescription } from '../stores/arrayStore';
import { useRootStore } from "../stores/store"

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
        const mainStore = useRootStore()
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

        const addToPrescription = ( selectedEntryId, ) => {
            props.store.addToPrescription( selectedEntryId );
        };

        const addToAfterArray = ( selectedEntryId, ) => {
            props.store.addToAfterArray( selectedEntryId );
        };

        const handleItemClick = ( entry ) => {
            if ( entry.group === '1' ) {

                addToPrescription( entry.id );
            } else {
                // Добавить entry в afterArray
                mainStore.sessionDataDoses.drugs = entry.name;

                console.log( mainStore.sessionDataDoses.drugs );
            }
        };

        const update = mainStore.updateItem
        // function handleUnitSelection( enryName, category ) {
        //     store.sessionData[ category ] = enryName;
        //     closeDialog();
        // }

        return {
            closeDialog,
            items,
            addEntryFromButton,
            removeEntry,
            newEntry,
            searchText,
            filteredItems,
            addToPrescription,
            addToAfterArray,
            handleItemClick,
            mainStore,
            update
        };
    },
} );
</script>

<style lang="scss" scoped>
@import "../css/app.scss";

.inputs {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
}

.book-items {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.close-btn {
    margin-bottom: 20px;
    border: 1px solid gray
}

.title {
    margin-bottom: 20px;
}

.title-items {
    width: 200px;
}
</style>