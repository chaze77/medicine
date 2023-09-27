<template>
    <div class="program">
        <q-item class="text-subtitle2">Программа аппарата</q-item>
        <q-btn v-for="program in programsList" :key="program.id" flat @click="chooseProgram(program.name)"
            :class="{ active: program.name === selectedProgram }">
            {{ program.name }}
        </q-btn>
    </div>
</template>

<script>
import { useRootStore } from 'src/stores/store';
import { ref } from "vue";
import { programs } from '../constants/constants';
export default {
    name: 'ProgramList',
    setup() {

        const programsList = ref( programs );
        const selectedProgram = ref( null ); // Одна переменная для выбранной программы
        const store = useRootStore();


        const chooseProgram = ( programName ) => {
            selectedProgram.value = programName;
            store.selectProgram( programName );
        };
        return {
            programsList,
            selectedProgram,
            chooseProgram
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