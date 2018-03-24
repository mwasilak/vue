<template>
    <div class="col-xs-12 col-sm-6">
        <p>Server #{{ id }}</p>
        <p>Server #{{ status }}</p>
        <button type="button" name="button" @click="changeStatus">Change status</button>
    </div>

</template>

<script>
  import {eventBus} from '../../main';

  export default {
    data: function () {
      return {
        id: 0,
        status: 'Not applicable'
      }
    },
    methods: {
      changeStatus () {
        this.status = "Normal";
        eventBus.$emit('statusChangeRequested', this.id);
      }
    },
    created () {
      eventBus.$on('serverWasSelected', (server) => {
        this.id = server.id;
        this.status = server.status;
      });
    }
  }
</script>

<style>

</style>
