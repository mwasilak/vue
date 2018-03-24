<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name : {{switchName()}}</p>
        <p>User age : {{userAge}}</p>
        <button type="button" name="button" @click="resetName">Reset name</button>
        <button type="button" name="button" @click="resetFn()">Reset name</button>
    </div>
</template>

<script>
  import {eventBus} from '../main';

 export default {
   props: {
     'name': {
       type: String
     },
     resetFn: Function,
     userAge: Number
   },
   methods: {
     switchName() {
       return this.name.split("").reverse().join("");
     },
     resetName() {
       this.name = 'Max';
       this.$emit('nameWasReset', this.name);
     }
   },
   created () {
     eventBus.$on('ageWasEdited', (age) => {
       this.userAge = age;
     });
   }
 }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
