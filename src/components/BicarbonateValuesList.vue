<template>
    <div class="bikorbonat">
        <div v-for="(descBookStore, index) in descBookStores" :key="index">
            <template v-if="descBookStore.catalogName === 'Бикорбонат'">
                <q-item class="text-subtitle2">Бикарбонат</q-item>
                <q-btn @click="openUnitDialog(descBookStore)" color="primary">
                    <q-icon name="menu_open" />
                </q-btn>
                <q-input standout v-model="bikorbonat" type="unit" :suffix="unitSuffix">
                </q-input>
                <!-- Вставляем UnitDialog с передачей пропсов -->
                <unit-dialog v-model="descBookStore.unitDialogVisible" :store="descBookStore" />
            </template>
        </div>

        <div>
            <q-item class="text-subtitle2">Сухой вес пациента</q-item>
            <q-input standout v-model="patientWeight" type="unit" suffix="кг" />
        </div>

        <div v-for="(descBookStore, index) in descBookStores" :key="index">
            <template v-if="descBookStore.catalogName === 'Антикоагуляция'">
                <q-item class="text-subtitle2">Антикогуляция</q-item>
                <q-btn>{{ antikogulant }}</q-btn>
                <q-btn @click="openUnitDialog(descBookStore)" color="primary">
                    <q-icon name="menu_open" />
                </q-btn>
                <unit-dialog v-model="descBookStore.unitDialogVisible" :store="descBookStore" />
            </template>
            <div>
            </div>
        </div>
        <div>
            <q-item class="text-subtitle2">Обьем</q-item>
            <q-input standout v-model="volume" type="unit" suffix="ед" />
        </div>

    </div>
</template>

<script>
import { computed, watch, ref } from 'vue'
import { useRootStore } from 'src/stores/store';
import UnitDialog from './UnitDialog.vue';

export default {
    name: 'BicarbonateValuesList',
    components: {
        UnitDialog,
    },
    props: {
        // Проп для управления видимостью диалога
        openUnitDialog: Function,
    },

    setup() {

        const store = useRootStore();
        const descBookStores = store.deskBookStores
        const bikorbonat = computed( {
            get: () => store.sessionData.bikorbonat,
            set: ( value ) => {
                // Вы можете обновить значение в хранилище при изменении поля bikorbonat
                store.sessionData.bikorbonat = value;
            },
        } );

        const patientWeight = computed( {
            get: () => store.sessionData.weight,
            set: ( value ) => {
                // Вы можете обновить значение в хранилище при изменении поля bikorbonat
                store.sessionData.weight = value;
            },
        } );

        const volume = computed( {
            get: () => store.sessionData.volume,
            set: ( value ) => {
                // Вы можете обновить значение в хранилище при изменении поля bikorbonat
                store.sessionData.volume = value;
            },
        } );

        const unit = ref( store.sessionData.unit );
        const antikogulant = ref( store.sessionData.antikogulant )

        // Используем watch для отслеживания изменений в store.sessionData.unit
        watch( () => store.sessionData.unit, ( newValue ) => {
            unit.value = newValue; // Обновляем значение в основном компоненте
        } );

        watch( () => store.sessionData.antikogulant, ( newValue ) => {
            antikogulant.value = newValue; // Обновляем значение в основном компоненте
        } );

        const unitSuffix = computed( () => {
            return unit.value === 'грамм' ? 'гр' : unit.value === 'литр' ? 'л' : '';
        } );

        return {
            descBookStores,
            unit,
            antikogulant,
            unitSuffix,
            volume,
            patientWeight,
            bikorbonat
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