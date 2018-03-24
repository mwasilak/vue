<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
            <li
                    class="list-group-item"
                    v-for="server in servers">
                <server-info :server="server"></server-info>
            </li>
        </ul>
    </div>
</template>

<script>
  import {eventBus} from '../../main';
  import ServerInfo from './ServerInfo.vue';

  export default {
    components: {
      'server-info':ServerInfo
    },
    data: function () {
      return {
        servers: [
          {id: 1, status: 'Normal'},
          {id: 2, status: 'Critical'},
          {id: 3, status: 'Unknown'},
          {id: 4, status: 'Critical'},
          {id: 5, status: 'Normal'}
        ]
      }
    },
    created () {
      eventBus.$on('statusChangeRequested', (id) => {
        this.servers.find((element) => {
          return element.id === id;
        }).status = "Normal";
      });
    },
    mounted () {
      eventBus.$emit('serverWasSelected', this.servers[0]);
    }
  }
</script>

<style>

</style>
