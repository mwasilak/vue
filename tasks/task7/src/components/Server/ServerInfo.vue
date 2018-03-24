<template>
  <div>
    <p @click="loadServerDetails">Server #{{ server.id }}</p>
  </div>
</template>

<script>
  import {eventBus} from '../../main';

  export default {
    props: ['server'],
    methods: {
      loadServerDetails() {
        eventBus.$emit('serverWasSelected', this.server);
      }
    }
  }
</script>

<style>

</style>
