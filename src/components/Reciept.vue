<template>
    <div class="recipient">
        <!-- Иконка компьютера -->
        <div v-for="icon in icons" :key="icon.id">
            <q-icon :name="icon.name" size="24px" />
            <div>
                <p v-for="item in prescription">
                    {{ item && item.category === icon.category ? item.name || 'No name' : '' }}
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import { icons } from "../constants/constants"
import { prescription } from "../stores/arrayStore"
import { watch } from "vue"
export default {
    name: 'Reciept',
    setup() {


        watch( () => prescription, ( newArray, oldArray ) => {


        } );

        return { prescription, icons };
    },
};
</script>
  
<style scoped>
.reciepnt {
    display: flex;
    flex-direction: column;
    border: 1px solid red
}
</style>
  