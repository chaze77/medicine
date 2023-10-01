<template>
    <div class="doses">
        <div v-for="(descBookStore, index) in descBookStores" :key="index">
            <div v-if="descBookStore.catalogName === 'Дозировка'">
                <!-- Код для отображения Дозировки -->
                <div class="bkr-items">
                    <div class="bkr-items-inner">
                        <q-item class="lable">{{ descBookStore.catalogName }}</q-item>
                        <span class="items antikogulant-lable">{{ drugDoses || "Наименование" }}</span>
                    </div>
                    <q-btn class="ibtn" @click="openUnitDialog(descBookStore)">
                        <q-icon name="menu_open" />
                    </q-btn>
                    <unit-dialog v-model="descBookStore.unitDialogVisible" :store="descBookStore" />
                </div>
            </div>
            <div v-else-if="descBookStore.catalogName === 'Путь приема'">
                <!-- Код для отображения Пути приема -->
                <div class="bkr-items">
                    <div class="bkr-items-inner">
                        <q-item class="lable">{{ descBookStore.catalogName }}</q-item>
                        <span class="items antikogulant-lable">{{ methodRoute || "Наименование" }}</span>
                    </div>
                    <q-btn class="ibtn" @click="openUnitDialog(descBookStore)">
                        <q-icon name="menu_open" />
                    </q-btn>
                    <unit-dialog v-model="descBookStore.unitDialogVisible" :store="descBookStore" />
                </div>
            </div>
        </div>
    </div>
</template>
  


<script>
import { computed, watch, ref } from 'vue'
import { useRootStore } from "../../stores/store"
import UnitDialog from '../UnitDialog.vue';

export default {
    name: 'Doses',
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


        const drugDoses = ref( store.sessionDataDoses.drugDoses );
        const methodRoute = ref( store.sessionDataDoses.methodRoute )

        // Используем watch для отслеживания изменений в store.sessionData.unit
        watch( () => store.sessionDataDoses.drugDoses, ( newValue ) => {
            drugDoses.value = newValue;
            console.log( newValue );
            // Обновляем значение в основном компоненте
        } );

        watch( () => store.sessionDataDoses.methodRoute, ( newValue ) => {
            methodRoute.value = newValue;
            console.log( newValue );// Обновляем значение в основном компоненте
        } );



        return {
            descBookStores,
            drugDoses,
            methodRoute,
        }
    }
}
</script>


<style lang="scss" scoped>
@import "../../css/app.scss";

.doses {
    display: flex;
}


.bkr-items {
    display: flex;
    gap: 20px;
    margin-right: 40px;
}

.bkr-items-inner {
    display: flex;
    flex-direction: column;
}

.patient {
    width: 100px;
}

.antikogulant-lable {

    width: clamp(150px, 15vw, 300px);
}
</style>