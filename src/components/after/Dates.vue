
<template>
    <div class="dates">
        <div>
            <div style="margin-bottom: 20px;">
                <p class="lable">Начало приема</p>
            </div>
            <q-btn v-model="startDate" class="btn">
                {{ startDate || "DD-MM-YYYY" }}
                <q-icon name="event" class="date-icon">
                    <q-popup-proxy>
                        <q-date v-model="startDate" mask="DD-MM-YYYY" minimal></q-date>
                    </q-popup-proxy> </q-icon>
            </q-btn>
        </div>

        <div>
            <div style="margin-bottom: 20px;">
                <p class="lable">Конец приема</p>
            </div>
            <q-btn v-model="endDate" class="btn">
                {{ endDate || "DD-MM-YYYY" }}
                <q-icon name="event" class="date-icon">
                    <q-popup-proxy>
                        <q-date v-model="endDate" mask="DD-MM-YYYY" minimal></q-date>
                    </q-popup-proxy> </q-icon>
            </q-btn>
        </div>

        <div class="quantity-days">
            <p class="lable"> Количество сеансов <span class="quantity">{{ selectedDaysLength }}</span></p>
        </div>

    </div>
</template>
  
<script>
import { ref, computed } from 'vue';
import { useRootStore } from '../../stores/store';

export default {
    setup() {



        const store = useRootStore()
        const startDate = computed( {
            get: () => store.startDate,
            set: ( value ) => {
                store.startDate = value;
            }
        } );

        const endDate = computed( {
            get: () => store.endDate,
            set: ( value ) => {
                store.endDate = value;
            }
        } );
        const selectedDays = store.selectedDays

        const selectedDaysLength = computed( () => {
            return selectedDays.length;
        } );

        return {
            store,
            startDate,
            endDate,
            selectedDays,
            selectedDaysLength
        };
    }
};
</script>
  
<style lang="scss" scoped>
@import "../../css/app.scss";

.dates {
    display: flex;
    gap: 40px;
}

.date-icon {
    padding-left: 20px;
    cursor: pointer;
}

.quantity-days {
    display: flex;
    align-items: flex-end;
}

.quantity {
    color: #01c9c8;
}
</style>